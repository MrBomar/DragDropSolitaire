/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Card/Card.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Card/Card.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".S, .C {\r\n    color: black;\r\n}\r\n\r\n.D, .H {\r\n    color: red;\r\n}\r\n\r\n.card {\r\n    box-sizing: border-box;\r\n    user-select: none;\r\n}\r\n\r\n.cardFront {\r\n    position: fixed;\r\n    display: grid;\r\n    grid-template-rows: 20% 60% 20%;\r\n    grid-template-columns: calc(20.4397vw * .20) auto calc(20.4397vw * .20);\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    box-shadow: 1px 2px black;\r\n    border-radius: 1vw;\r\n}\r\n\r\n.cardFront h2 {\r\n    display: block;\r\n    position: absolute;\r\n    height: calc(20.4397vw * .20);\r\n    line-height: calc(20.4397vw * .20);\r\n    width: calc(20.4397vw * .20);\r\n    text-align: center;\r\n    font-size: 4vw;\r\n}\r\n\r\n.cardTopLeft {\r\n    grid-row: 1;\r\n    grid-column: 1;\r\n}\r\n\r\n.cardTopRight {\r\n    grid-row: 1;\r\n    grid-column: 3;\r\n}\r\n\r\n.cardMiddle {\r\n    width: 100%;\r\n    height: calc(20.4397vw *.6);\r\n    line-height: calc(20.4397vw *.6);\r\n    vertical-align: middle;\r\n    grid-row: 2;\r\n    grid-column-start: 1;\r\n    grid-column-end: 4;\r\n    text-align: center;\r\n    font-size: 8vw;\r\n}\r\n\r\n.cardBottomLeft {\r\n    grid-row: 3;\r\n    grid-column: 1;\r\n}\r\n\r\n.cardBottomRight {\r\n    grid-row: 3;\r\n    grid-column: 3;\r\n}\r\n\r\n.cardBack {\r\n    position: fixed;\r\n    background-color: teal;\r\n    border-width: 1vh;\r\n    border-style: ridge groove groove ridge;\r\n    border-radius: 1vw;\r\n    box-shadow: 1px 2px black;\r\n}\r\n\r\n.cardBack h1, h2 {\r\n    display: none;\r\n}\r\n\r\n.cardTop, .cardBottom {\r\n    width: 100%;\r\n    height: calc(20.4397vw * .25);\r\n}\r\n\r\n.cardBack, .cardFront, .mobileCardFront {\r\n    height: 20.44414437vw;\r\n    width: 13.14285714vw;\r\n    user-select: none;\r\n}\r\n\r\n.shade {\r\n    background-color: rgb(180,180,255);\r\n    opacity: 80;\r\n}\r\n\r\n@media screen and (min-aspect-ratio: 741/741) {\r\n    .cardFront h2 {\r\n        height: calc(20.4397vh * .20);\r\n        line-height: calc(20.4397vh * .20);\r\n        width: calc(20.4397vh * .20);\r\n        font-size: 4vh;\r\n    }\r\n    \r\n    .cardFront {\r\n        grid-template-columns: calc(20.4397vh * .20) auto calc(20.4397vh * .20);\r\n        border-radius: 1vh;\r\n    }\r\n    \r\n    .cardMiddle {\r\n        height: calc(20.4397vh *.6);\r\n        line-height: calc(20.4397vh *.6);\r\n        font-size: 8vh;\r\n    }\r\n\r\n    .cardBack {\r\n        border-width: 1vh;\r\n        border-radius: 1vh;\r\n    }\r\n    \r\n    .cardTop, .cardBottom {\r\n        height: calc(20.4397vh * .25);\r\n    }\r\n    \r\n    .cardBack, .cardFront, .mobileCardFront {\r\n        height: 20.44414437vh;\r\n        width: 13.14285714vh;\r\n        user-select: none;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CloseButton/CloseButton.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CloseButton/CloseButton.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".CloseButton {\r\n    width: 300px;\r\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    color: white;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.CloseButton > h1{\r\n    width: 50px;\r\n    margin-left: 250px;\r\n    text-align: center;\r\n}\r\n\r\n.CloseButton > h1:hover{\r\n    color: black;\r\n    background-color: rgba(255,255,255,.70);\r\n    user-select: none;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Foundation/Foundation.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Foundation/Foundation.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".foundation {\r\n    border: 1px inset;\r\n    border-radius: 1vw;\r\n    z-index: -1;\r\n}\r\n\r\n.symbol {\r\n    font-size: 14vw;\r\n    text-align: center;\r\n    width: 13.14vw;\r\n    z-index: -1;\r\n}\r\n\r\n.mobileSymbol {\r\n    padding-top: 5vw;\r\n    font-size: 8vw;\r\n    text-align: center;\r\n    width: 13.14vw;\r\n    z-index: -1;\r\n}\r\n\r\n@media screen and (min-aspect-ratio: 741 / 741) {\r\n    .symbol {\r\n        font-size: 15vh;\r\n        width: 13.14vh;\r\n    }\r\n    \r\n    .mobileSymbol {\r\n        padding-top: 5vh;\r\n        font-size: 8vh;\r\n        width: 13.14vh;\r\n        margin-top: 1vh;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/GameBoard/GameBoard.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/GameBoard/GameBoard.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#gameBoard {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: green;\r\n    display: grid;\r\n\r\n    grid-template-columns: 1vw 13.14285714vw 1vw 13.14285714vw 1vw 13.14285714vw 1vw 13.14285714vw 1vw 13.14285714vw 1vw 13.14285714vw 1vw 13.14285714vw 1vw; \r\n    grid-template-rows: 1vw 20.44414437vw 1vw calc(100vh - 23.44414437vw) 1vw; \r\n}\r\n\r\n@media screen and (min-aspect-ratio: 741/741) {\r\n    #gameBoard {\r\n        grid-template-columns: calc((100vw - 99vh)/2) 13.14285714vh 1vh 13.14285714vh 1vh 13.14285714vh 1vh 13.14285714vh 1vw 13.14285714vh 1vw 13.14285714vh 1vh 13.14285714vh calc((100vw - 99vh)/2);\r\n        grid-template-rows: 1vh 20.44414437vh 1vh calc(100vw - 23.44414437vh) 1vh;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/GameMenu/GameMenu.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/GameMenu/GameMenu.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#gameMenu {\r\n    width: 300px;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, .6);\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 10000;\r\n}\r\n\r\n#gameMenuScreen {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, .6);\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 9999;\r\n}\r\n\r\n\r\n.menuopen {\r\n    animation-name: menu-open;\r\n    animation-duration: 0.4s;\r\n    display: block;\r\n}\r\n\r\n.menuclose {\r\n    display: none;\r\n}\r\n\r\n.screenopen {\r\n    animation-name: screen-open;\r\n    animation-duration: 0.4s;\r\n    display: block;\r\n}\r\n\r\n.screenclose {\r\n    display: none;\r\n}\r\n\r\n@keyframes menu-open {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        width: 1;\r\n    }\r\n}\r\n\r\n@keyframes screen-open {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/MenuButton/MenuButton.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/MenuButton/MenuButton.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".MenuButton {\r\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    color: white;\r\n    user-select: none;\r\n    text-align: center;\r\n    line-height: 100px;\r\n}\r\n\r\n.MenuButton:hover {\r\n    background-color: rgba(255,255,255,.70);\r\n    color: black;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pile/Pile.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pile/Pile.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".topPile {\r\n    height: 20.44414437vw;\r\n    width: 13.14285714vw;\r\n    grid-row: 2;\r\n    background-color: rgba(255, 255, 255, .25);\r\n}\r\n\r\n.topPile div {\r\n    position: absolute;\r\n}\r\n\r\n#stock {\r\n    grid-column: 2;\r\n}\r\n\r\n#talon {\r\n    grid-column: 4;\r\n}\r\n\r\n#spade {\r\n    grid-column: 8;\r\n}\r\n\r\n#heart {\r\n    grid-column: 10;\r\n}\r\n\r\n#club {\r\n    grid-column: 12;\r\n}\r\n\r\n#diamond {\r\n    grid-column: 14;\r\n}\r\n\r\n@media screen and (min-aspect-ratio: 741 / 741){\r\n    .topPile {\r\n        height: 20.44414437vh;\r\n        width: 13.14285714vh;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/QuickSolve/QuickSolve.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/QuickSolve/QuickSolve.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#quickSolve {\r\n    outline: none;\r\n    border: none;\r\n    height: 10vw;\r\n    width: 13vw;\r\n    background-color: orange;\r\n    grid-row: 2;\r\n    grid-column: 6;\r\n    font-size: 3vw;\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    box-shadow: 0.5vw 0.5vw black;\r\n    border: none;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin-top: 5vw;\r\n    border-radius: 10%;\r\n}\r\n\r\n#quickSolve:active {\r\n    margin-top: 5.5vw;\r\n    margin-left: 0.5vw;\r\n    border: 1px solid black;\r\n    box-shadow: none;\r\n}\r\n\r\n@media screen and (min-aspect-ratio: 741 / 741){\r\n    #quickSolve {\r\n        font-size: 3vh;\r\n        box-shadow: 0.5vh 0.5vh black;\r\n        margin-top: 5vh;\r\n        height: 10vh;\r\n        width: 13vh;\r\n    }\r\n\r\n    #quickSolve:active {\r\n        margin-top: 5.5vh;\r\n        margin-left: 0.5vh;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Tableau/Tableau.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Tableau/Tableau.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#tableau1 {\r\n    grid-column: 2;\r\n}\r\n\r\n#tableau2 {\r\n    grid-column: 4; \r\n}\r\n\r\n#tableau3 {\r\n    grid-column: 6;\r\n}\r\n\r\n#tableau4 {\r\n    grid-column: 8;  \r\n}\r\n\r\n#tableau5 {\r\n    grid-column: 10;\r\n}\r\n\r\n#tableau6 {\r\n    grid-column: 12;\r\n}\r\n\r\n#tableau7 {\r\n    grid-column: 14;\r\n}\r\n\r\n.tableau {\r\n    width: 13.14285714vw;\r\n    height: calc(100vh - (23.44414437vw));\r\n    background-color: rgba(255, 255, 255, .25);\r\n    grid-row: 4;\r\n}\r\n\r\n@media screen and (min-aspect-ratio: 741 / 741){\r\n\r\n    .tableau {\r\n        width: 13.14285714vh;\r\n        height: calc(100vh - (23.44414437vh));\r\n        background-color: rgba(255, 255, 255, .25);\r\n        grid-row: 4;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n    /*position: fixed;*/\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-size-adjust: none;\r\n    user-select: none;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Action/Action.js":
/*!******************************!*\
  !*** ./src/Action/Action.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


var ToggleMenu = function ToggleMenu() {
  if (_index__WEBPACK_IMPORTED_MODULE_0__["STATE"].WINDOW.MENU_OPEN) {
    _index__WEBPACK_IMPORTED_MODULE_0__["GAME_MENU"].object.classList.add('menuclose');
    _index__WEBPACK_IMPORTED_MODULE_0__["GAME_MENU"].object2.classList.add('screenclose');
    _index__WEBPACK_IMPORTED_MODULE_0__["GAME_MENU"].object.classList.remove('menuopen');
    _index__WEBPACK_IMPORTED_MODULE_0__["GAME_MENU"].object2.classList.remove('screenopen');
    _index__WEBPACK_IMPORTED_MODULE_0__["STATE"].WINDOW.MENU_OPEN = false;
  } else {
    _index__WEBPACK_IMPORTED_MODULE_0__["GAME_MENU"].object.classList.remove('menuclose');
    _index__WEBPACK_IMPORTED_MODULE_0__["GAME_MENU"].object2.classList.remove('screenclose');
    _index__WEBPACK_IMPORTED_MODULE_0__["GAME_MENU"].object.classList.add('menuopen');
    _index__WEBPACK_IMPORTED_MODULE_0__["GAME_MENU"].object2.classList.add('screenopen');
    _index__WEBPACK_IMPORTED_MODULE_0__["STATE"].WINDOW.MENU_OPEN = true;
  }
};

var Undo = function Undo() {
  if (_index__WEBPACK_IMPORTED_MODULE_0__["STATE"].GAME.MOVE_HISTORY.length) {
    var move = _index__WEBPACK_IMPORTED_MODULE_0__["STATE"].GAME.MOVE_HISTORY.pop();
    move.reverse();
  }
};

var Action = {
  ToggleMenu: ToggleMenu,
  Undo: Undo
};
/* harmony default export */ __webpack_exports__["default"] = (Action);

/***/ }),

/***/ "./src/Card/Card.css":
/*!***************************!*\
  !*** ./src/Card/Card.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Card.css */ "./node_modules/css-loader/dist/cjs.js!./src/Card/Card.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/Card/Card.js":
/*!**************************!*\
  !*** ./src/Card/Card.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _Conversion_Conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Conversion/Conversion */ "./src/Conversion/Conversion.js");
/* harmony import */ var _Globals_Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Globals/Globals */ "./src/Globals/Globals.js");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.css */ "./src/Card/Card.css");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Card =
/*#__PURE__*/
function () {
  function Card(set, suite, value, parent, face) {
    _classCallCheck(this, Card);

    this.color = suite === 'H' || suite === 'D' ? 'red' : 'black';
    this.face = face;
    this.suite = suite;
    this.value = value;
    this.set = set;
    this.valueSymbol = Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_0__["ToFaceValue"])(value);
    this.suiteSymbol = Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_0__["ToSymbol"])(suite);
    this.name = set + suite + value;
    this.parent = parent;
    this.dragStartPOS = [];
    this.zIndex = 0;
    this.clickEvents = [{
      trigger: "mousedown",
      action: _Globals_Globals__WEBPACK_IMPORTED_MODULE_1__["CARD_MOUSE_DOWN"]
    }];
    this.cssClasses = ['card'];
    this.addClass = this.addClass.bind(this);
    this.destruct = this.destruct.bind(this);
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
    this.element = this.element.bind(this);
    this.flip = this.flip.bind(this);
    this.getFace = this.getFace.bind(this);
    this.getTop = this.getTop.bind(this);
    this.getLeft = this.getLeft.bind(this);
    this.getHeight = this.getHeight.bind(this);
    this.getWidth = this.getWidth.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.render = this.render.bind(this);
    this.setTop = this.setTop.bind(this);
    this.setLeft = this.setLeft.bind(this);
    this.setZIndex = this.setZIndex.bind(this);
    this.render();
  }

  _createClass(Card, [{
    key: "addClass",
    value: function addClass(a) {
      this.element().classList.add(a);
    }
  }, {
    key: "drag",
    value: function drag(margin) {
      //Adjust position
      this.setLeft(this.dragStartPOS[0] + margin[0]);
      this.setTop(this.dragStartPOS[1] + margin[1]); //Shade the card

      this.element().classList.add('shade'); //Adjust ZIndex

      this.element().style.zIndex = this.zIndex + 100;
    }
  }, {
    key: "drop",
    value: function drop() {
      this.element().classList.remove('shade');
    }
  }, {
    key: "destruct",
    value: function destruct() {
      var _this = this;

      this.clickEvents.forEach(function (item) {
        return _this.element().removeEventListener(item.trigger, item.action);
      });
      this.element().remove();
    }
  }, {
    key: "element",
    value: function element() {
      return document.getElementById(this.name);
    }
  }, {
    key: "flip",
    value: function flip() {
      //Change the value
      if (!this.face) {
        this.removeClass('cardBack');
        this.addClass('cardFront');
        this.face = true;
      } else {
        this.addClass('cardBack');
        this.removeClass('cardFront');
        this.face = false;
      }
    }
  }, {
    key: "getFace",
    value: function getFace() {
      return this.face;
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.element().offsetTop;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.element().offsetLeft;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element().offsetHeight;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.element().offsetWidth;
    }
  }, {
    key: "removeClass",
    value: function removeClass(a) {
      this.element().classList.remove(a);
    }
  }, {
    key: "render",
    value: function render() {
      var me = document.createElement("div");
      me.innerHTML = "\n                        <h2 class=\"cardTopLeft\">".concat(this.valueSymbol, "</h3>\n                        <h2 class=\"cardTopRight\">").concat(this.suiteSymbol, "</h2>\n                        <h1 class=\"cardMiddle\">").concat(this.suiteSymbol, "</h1>\n                        <h2 class=\"cardBottomLeft\">").concat(this.suiteSymbol, "</h2>\n                        <h2 class=\"cardBottomRight\">").concat(this.valueSymbol, "</h3>");
      me.classList.add(this.suite);

      if (this.face) {
        me.classList.add('cardFront');
      } else {
        me.classList.add("cardBack");
      }

      this.cssClasses.forEach(function (item) {
        return me.classList.add(item);
      });
      me.id = this.name;
      this.parent.element().appendChild(me);
      this.clickEvents.forEach(function (item) {
        return me.addEventListener(item.trigger, item.action);
      });
    }
  }, {
    key: "setTop",
    value: function setTop(y) {
      this.element().style.top = "".concat(y, "px");
    }
  }, {
    key: "setLeft",
    value: function setLeft(x) {
      this.element().style.left = "".concat(x, "px");
    }
  }, {
    key: "setZIndex",
    value: function setZIndex(z) {
      this.element().style.zIndex = z;
      this.zIndex = z;
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/CardMoves/Base.js":
/*!*******************************!*\
  !*** ./src/CardMoves/Base.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _Globals_Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Globals/Globals */ "./src/Globals/Globals.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Base =
/*#__PURE__*/
function () {
  function Base() {
    _classCallCheck(this, Base);

    this.finish = this.finish.bind(this);
  }

  _createClass(Base, [{
    key: "finish",
    value: function finish() {
      if (_index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION.CARDS.length) _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION.CARDS.forEach(function (crd) {
        return crd.drop();
      });
      Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_0__["REFRESH_SCREEN"])();
    }
  }]);

  return Base;
}();



/***/ }),

/***/ "./src/CardMoves/CardAction.js":
/*!*************************************!*\
  !*** ./src/CardMoves/CardAction.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardAction; });
/* harmony import */ var _Globals_Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Globals/Globals */ "./src/Globals/Globals.js");
/* harmony import */ var _MoveCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoveCard */ "./src/CardMoves/MoveCard.js");
/* harmony import */ var _FlipCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlipCard */ "./src/CardMoves/FlipCard.js");
/* harmony import */ var _CombinedMove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CombinedMove */ "./src/CardMoves/CombinedMove.js");
/* harmony import */ var _Stock_Stock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Stock/Stock */ "./src/Stock/Stock.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Tableau/Tableau */ "./src/Tableau/Tableau.js");
/* harmony import */ var _GameBoard_GameBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GameBoard/GameBoard */ "./src/GameBoard/GameBoard.js");
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Card/Card */ "./src/Card/Card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var CardAction =
/*#__PURE__*/
function () {
  function CardAction(fromPile, cards, toPile) {
    _classCallCheck(this, CardAction);

    this.actions = [];
    this.cards = cards instanceof _Card_Card__WEBPACK_IMPORTED_MODULE_8__["default"] ? [cards] : cards;
    this.fromPile = fromPile;
    this.toPile = toPile;
    this.assess = this.assess.bind(this);
    this.execute = this.execute.bind(this);
    this.getPile = this.getPile.bind(this);
    this.assess();
  }

  _createClass(CardAction, [{
    key: "assess",
    value: function assess() {
      if (this.fromPile instanceof _Stock_Stock__WEBPACK_IMPORTED_MODULE_4__["default"] && this.fromPile.cards.length > 0) {
        this.actions.push(new _FlipCard__WEBPACK_IMPORTED_MODULE_2__["default"](this.cards[0]));
        this.actions.push(new _MoveCard__WEBPACK_IMPORTED_MODULE_1__["default"](this.fromPile, this.cards, this.toPile));
        this.execute();
        return true;
      } else if (this.toPile.validateMove(this.cards)) {
        this.actions.push(new _MoveCard__WEBPACK_IMPORTED_MODULE_1__["default"](this.fromPile, this.cards, this.toPile));

        if (this.fromPile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_6__["default"] && this.fromPile.cards.length > 0) {
          if (!this.fromPile.topCard().face) {
            this.actions.push(new _FlipCard__WEBPACK_IMPORTED_MODULE_2__["default"](this.fromPile.topCard()));
          }
        }

        this.execute();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "execute",
    value: function execute() {
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.MOVE_HISTORY.push(new _CombinedMove__WEBPACK_IMPORTED_MODULE_3__["default"](this.actions)); //STATE.GAME_WIN_DETECTED = true;  //Condition used for testing

      if (_index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.find(function (pile) {
        return pile instanceof _GameBoard_GameBoard__WEBPACK_IMPORTED_MODULE_7__["default"];
      }).detectWin()) _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.WIN_DETECTED = true; //FIX ME
      //From here we can call the function to send solved deck string to server
    }
  }, {
    key: "getPile",
    value: function getPile(name) {
      return Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_0__["ALL_PILES"])().find(function (pile) {
        return name;
      });
    }
  }]);

  return CardAction;
}();



/***/ }),

/***/ "./src/CardMoves/CombinedMove.js":
/*!***************************************!*\
  !*** ./src/CardMoves/CombinedMove.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CombinedMove; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/CardMoves/Base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CombinedMove =
/*#__PURE__*/
function (_Base) {
  _inherits(CombinedMove, _Base);

  function CombinedMove(actions) {
    var _this;

    _classCallCheck(this, CombinedMove);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CombinedMove).call(this));
    _this.actions = actions;
    return _this;
  }

  _createClass(CombinedMove, [{
    key: "reverse",
    value: function reverse() {
      this.actions.forEach(function (action) {
        return action.reverse();
      });
      this.finish();
    }
  }]);

  return CombinedMove;
}(_Base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/CardMoves/FlipCard.js":
/*!***********************************!*\
  !*** ./src/CardMoves/FlipCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlipCard; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/CardMoves/Base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var FlipCard =
/*#__PURE__*/
function (_Base) {
  _inherits(FlipCard, _Base);

  function FlipCard(card) {
    var _this;

    _classCallCheck(this, FlipCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlipCard).call(this));
    _this.card = card;
    _this.execute = _this.execute.bind(_assertThisInitialized(_this));
    _this.reverse = _this.reverse.bind(_assertThisInitialized(_this));

    _this.execute();

    return _this;
  }

  _createClass(FlipCard, [{
    key: "execute",
    value: function execute() {
      this.card.flip();
      this.finish();
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this.card.flip();
      this.finish();
    }
  }]);

  return FlipCard;
}(_Base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/CardMoves/MoveCard.js":
/*!***********************************!*\
  !*** ./src/CardMoves/MoveCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoveCard; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/CardMoves/Base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MoveCard =
/*#__PURE__*/
function (_Base) {
  _inherits(MoveCard, _Base);

  function MoveCard(fromPile, cards, toPile) {
    var _this;

    _classCallCheck(this, MoveCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoveCard).call(this));
    _this.fromPile = fromPile;
    _this.toPile = toPile;
    _this.cards = cards;
    _this.execute = _this.execute.bind(_assertThisInitialized(_this));
    _this.reverse = _this.reverse.bind(_assertThisInitialized(_this));

    _this.execute();

    return _this;
  }

  _createClass(MoveCard, [{
    key: "execute",
    value: function execute() {
      this.toPile.addCards(this.fromPile.removeCards(this.cards));
      this.finish();
    }
  }, {
    key: "reverse",
    value: function reverse() {
      //Part of the undo feature, will undo the action.
      this.fromPile.addCards(this.toPile.removeCards(this.cards));
      this.finish();
    }
  }]);

  return MoveCard;
}(_Base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/CloseButton/CloseButton.css":
/*!*****************************************!*\
  !*** ./src/CloseButton/CloseButton.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./CloseButton.css */ "./node_modules/css-loader/dist/cjs.js!./src/CloseButton/CloseButton.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/CloseButton/CloseButton.js":
/*!****************************************!*\
  !*** ./src/CloseButton/CloseButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CloseButton; });
/* harmony import */ var _CloseButton_CloseButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CloseButton/CloseButton.css */ "./src/CloseButton/CloseButton.css");
/* harmony import */ var _CloseButton_CloseButton_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CloseButton_CloseButton_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CloseButton =
/*#__PURE__*/
function () {
  function CloseButton(action) {
    _classCallCheck(this, CloseButton);

    this.action = action;
    this.object;
    this.build = this.build.bind(this);
  }

  _createClass(CloseButton, [{
    key: "build",
    value: function build() {
      this.object = document.createElement('div');
      this.object.classList.add('CloseButton');
      var button = "<h1>x</h1>";
      this.object.innerHTML = button;
      this.object.onclick = this.action;
      return this.object;
    }
  }, {
    key: "object",
    value: function object() {
      this.object;
    }
  }]);

  return CloseButton;
}();



/***/ }),

/***/ "./src/Conversion/Conversion.js":
/*!**************************************!*\
  !*** ./src/Conversion/Conversion.js ***!
  \**************************************/
/*! exports provided: FromAlpha, ToAlpha, FromFaceValue, ToFaceValue, FromSymbol, ToSymbol, CardValues, SuiteValues, SuiteSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromAlpha", function() { return FromAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToAlpha", function() { return ToAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromFaceValue", function() { return FromFaceValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToFaceValue", function() { return ToFaceValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromSymbol", function() { return FromSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToSymbol", function() { return ToSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardValues", function() { return CardValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiteValues", function() { return SuiteValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiteSymbols", function() { return SuiteSymbols; });
var AlphaScale = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var CardSymbols = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var CardValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
var SuiteScale = ["S", "C", "H", "D", "♠", "♣", "♥", "♦"];

var FromAlpha = function FromAlpha(value) {
  return AlphaScale.indexOf(value);
};

var ToAlpha = function ToAlpha(value) {
  return AlphaScale[value];
};

var FromFaceValue = function FromFaceValue(value) {
  return CardValues[CardSymbols.indexOf(value)];
};

var ToFaceValue = function ToFaceValue(value) {
  return CardSymbols[CardValues.indexOf(value)];
};

var ToSymbol = function ToSymbol(value) {
  return SuiteScale[SuiteScale.indexOf(value) + 4];
};

var FromSymbol = function FromSymbol(value) {
  return SuiteScale[SuiteScale.indexOf(value) - 4];
};

var SuiteValues = function SuiteValues() {
  return SuiteScale.slice(0, 4);
};

var SuiteSymbols = function SuiteSymbols() {
  return SuiteScale.slice(4, 8);
};



/***/ }),

/***/ "./src/Deck/Deck.js":
/*!**************************!*\
  !*** ./src/Deck/Deck.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Deck; });
/* harmony import */ var _Conversion_Conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Conversion/Conversion */ "./src/Conversion/Conversion.js");
/* harmony import */ var _Stock_Stock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Stock/Stock */ "./src/Stock/Stock.js");
/* harmony import */ var _GameBoard_GameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameBoard/GameBoard */ "./src/GameBoard/GameBoard.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Card/Card */ "./src/Card/Card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Deck =
/*#__PURE__*/
function () {
  function Deck() {
    _classCallCheck(this, Deck);

    this.random = this.random.bind(this);
    this.randomizeArray = this.randomizeArray.bind(this);
    this.reconstituteDeck = this.reconstituteDeck.bind(this);
    this.solvable - this.solvable.bind(this);
  }

  _createClass(Deck, [{
    key: "solvable",
    value: function solvable() {
      var _this = this;

      var failed = false;
      new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "https://mrlesbomar.com/games/cgi-bin/get_solved_deck.php");

        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(xhr.statusText);
          }
        };

        xhr.onerror = function () {
          return reject(xhr.statusText);
        };

        xhr.send();
      }).then(function (stuff) {
        return _this.reconstituteDeck(stuff);
      })["catch"](function (error) {
        //Create status screen and deal random deck
        var notice = document.createElement('div');
        notice.id = 'notice';
        notice.innerHTML = "<h1>Unable to connect to the server. Please choose a random deck.</h1>";
        document.getElementsByTagName('main')[0].appendChild(notice);
      });
    }
  }, {
    key: "random",
    value: function random(myParent, board) {
      var tempDeck = [];
      Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_0__["SuiteValues"])().forEach(function (suite) {
        _Conversion_Conversion__WEBPACK_IMPORTED_MODULE_0__["CardValues"].forEach(function (number) {
          tempDeck.push(["A", suite, number]);
        });
      }); //Shuffle deck and add return

      var shuffled = this.randomizeArray(tempDeck); //Build deck

      shuffled.forEach(function (item) {
        myParent.cards.push(new _Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"](item[0], item[1], item[2], board, false));
      });
    }
  }, {
    key: "randomizeArray",
    value: function randomizeArray(myArray) {
      var newArray = [];

      do {
        newArray.push(myArray.splice(Math.floor(Math.random() * myArray.length), 1)[0]);
      } while (myArray.length > 0);

      return newArray;
    }
  }, {
    key: "reconstituteDeck",
    value: function reconstituteDeck(deckString) {
      //Seperate string into individual card values
      var individualCards = [];

      for (var i = 0; i < deckString.length; i += 3) {
        individualCards.push([deckString[i], deckString[i + 1], deckString[i + 2]]);
      } //Capture targets to pass


      var parent = _index__WEBPACK_IMPORTED_MODULE_3__["STATE"].GAME.OBJECT_TREE.find(function (item) {
        return item instanceof _Stock_Stock__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      var board = _index__WEBPACK_IMPORTED_MODULE_3__["STATE"].GAME.OBJECT_TREE.find(function (item) {
        return item instanceof _GameBoard_GameBoard__WEBPACK_IMPORTED_MODULE_2__["default"];
      }); //Build cards and push onto Stock

      individualCards.forEach(function (crd) {
        parent.cards.push(new _Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"](crd[0], crd[1], crd[2], board, false));
      });
    }
  }]);

  return Deck;
}();



/***/ }),

/***/ "./src/Foundation/Foundation.css":
/*!***************************************!*\
  !*** ./src/Foundation/Foundation.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Foundation.css */ "./node_modules/css-loader/dist/cjs.js!./src/Foundation/Foundation.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/Foundation/Foundation.js":
/*!**************************************!*\
  !*** ./src/Foundation/Foundation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Foundation; });
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card/Card */ "./src/Card/Card.js");
/* harmony import */ var _Pile_Pile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pile/Pile */ "./src/Pile/Pile.js");
/* harmony import */ var _Conversion_Conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Conversion/Conversion */ "./src/Conversion/Conversion.js");
/* harmony import */ var _Foundation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Foundation.css */ "./src/Foundation/Foundation.css");
/* harmony import */ var _Foundation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Foundation_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Foundation =
/*#__PURE__*/
function (_Pile) {
  _inherits(Foundation, _Pile);

  function Foundation(parent, name, suite) {
    var _this;

    _classCallCheck(this, Foundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Foundation).call(this, parent, name));
    _this.cssClasses = ["foundation", "topPile"];
    _this.suite = suite;
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.validateMove = _this.validateMove.bind(_assertThisInitialized(_this));

    _this.render();

    return _this;
  }

  _createClass(Foundation, [{
    key: "render",
    value: function render() {
      var me = document.createElement('h1');
      me.id = this.name;
      me.style.zIndex = 0;
      me.style.color = this.suite == "S" || this.suite == "C" ? "black" : "red";
      me.innerText = Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_2__["ToSymbol"])(this.suite);
      this.cssClasses.forEach(function (item) {
        return me.classList.add(item);
      });
      me.classList.add("symbol");
      this.parent.element().appendChild(me);
    }
  }, {
    key: "validateMove",
    value: function validateMove(aCard) {
      var tempCard = aCard instanceof _Card_Card__WEBPACK_IMPORTED_MODULE_0__["default"] ? [aCard] : aCard;

      if (tempCard.length == 1) {
        if (!!this.cardCount() && tempCard[0].suite === this.suite) {
          return Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_2__["FromAlpha"])(this.topCard().value) === Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_2__["FromAlpha"])(tempCard[0].value) - 1 ? true : false;
        } else if (tempCard[0].value === 'A' && tempCard[0].suite === this.suite) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }]);

  return Foundation;
}(_Pile_Pile__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/GameBoard/GameBoard.css":
/*!*************************************!*\
  !*** ./src/GameBoard/GameBoard.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./GameBoard.css */ "./node_modules/css-loader/dist/cjs.js!./src/GameBoard/GameBoard.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/GameBoard/GameBoard.js":
/*!************************************!*\
  !*** ./src/GameBoard/GameBoard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameBoard; });
/* harmony import */ var _GameBoard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard.css */ "./src/GameBoard/GameBoard.css");
/* harmony import */ var _GameBoard_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_GameBoard_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stock_Stock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Stock/Stock */ "./src/Stock/Stock.js");
/* harmony import */ var _Talon_Talon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Talon/Talon */ "./src/Talon/Talon.js");
/* harmony import */ var _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Foundation/Foundation */ "./src/Foundation/Foundation.js");
/* harmony import */ var _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tableau/Tableau */ "./src/Tableau/Tableau.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _QuickSolve_QuickSolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../QuickSolve/QuickSolve */ "./src/QuickSolve/QuickSolve.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var GameBoard =
/*#__PURE__*/
function () {
  function GameBoard() {
    _classCallCheck(this, GameBoard);

    this.name = 'gameBoard';
    this.allTableau = this.allTableau.bind(this);
    this.detectWin = this.detectWin.bind(this);
    this.element = this.element.bind(this);
    this.render = this.render.bind(this);
    this.refresh = this.refresh.bind(this);
    this.render();
  }

  _createClass(GameBoard, [{
    key: "allTableau",
    value: function allTableau() {
      return _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
        return pile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
    }
  }, {
    key: "detectWin",
    value: function detectWin() {
      //Cycles the Tableau and checks to see if any piles are unsolved
      return this.allTableau().find(function (pile) {
        return pile.solved() == false;
      }) ? false : true;
    }
  }, {
    key: "destruct",
    value: function destruct() {
      this.element().remove();
    }
  }, {
    key: "element",
    value: function element() {
      //Return the DOM object
      return document.getElementById(this.name);
    }
  }, {
    key: "render",
    value: function render() {
      //Generate the main game board and grid layout.
      var me = document.createElement('div');
      me.id = this.name;
      me.style.zIndex = -1;
      document.body.appendChild(me); //Add the different types of piles to the game board.

      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Stock_Stock__WEBPACK_IMPORTED_MODULE_1__["default"](this, 'stock'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Talon_Talon__WEBPACK_IMPORTED_MODULE_2__["default"](this, 'talon'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_3__["default"](this, 'spade', 'S'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_3__["default"](this, 'heart', 'H'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_3__["default"](this, 'club', 'C'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_3__["default"](this, 'diamond', 'D'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'tableau1'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'tableau2'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'tableau3'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'tableau4'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'tableau5'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'tableau6'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'tableau7'));
      _index__WEBPACK_IMPORTED_MODULE_5__["STATE"].GAME.OBJECT_TREE.push(new _QuickSolve_QuickSolve__WEBPACK_IMPORTED_MODULE_6__["default"](this));
    }
  }, {
    key: "refresh",
    value: function refresh() {}
  }]);

  return GameBoard;
}();



/***/ }),

/***/ "./src/GameMenu/GameMenu.css":
/*!***********************************!*\
  !*** ./src/GameMenu/GameMenu.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./GameMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/GameMenu/GameMenu.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/GameMenu/GameMenu.js":
/*!**********************************!*\
  !*** ./src/GameMenu/GameMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameMenu; });
/* harmony import */ var _Globals_Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Globals/Globals */ "./src/Globals/Globals.js");
/* harmony import */ var _Action_Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Action/Action */ "./src/Action/Action.js");
/* harmony import */ var _GameMenu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameMenu.css */ "./src/GameMenu/GameMenu.css");
/* harmony import */ var _GameMenu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GameMenu_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuButton/MenuButton */ "./src/MenuButton/MenuButton.js");
/* harmony import */ var _CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CloseButton/CloseButton */ "./src/CloseButton/CloseButton.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var GameMenu =
/*#__PURE__*/
function () {
  function GameMenu(parentDocument) {
    _classCallCheck(this, GameMenu);

    this.parentDocument = parentDocument;
    this.menuItems = [];
    this.object;
    this.object2;
    this.render = this.render.bind(this);
    this.refresh = this.refresh.bind(this);
    this.render();
  }

  _createClass(GameMenu, [{
    key: "render",
    value: function render() {
      var _this = this;

      //Creating the menu object
      this.object = document.createElement("div");
      this.object.id = 'gameMenu';
      this.object.classList.add('menuopen'); //Creating the screen

      this.object2 = document.createElement("div");
      this.object2.id = 'gameMenuScreen';
      this.object2.classList.add('screenopen');
      this.object2.onclick = _Action_Action__WEBPACK_IMPORTED_MODULE_1__["default"].ToggleMenu; //These are the buttons

      this.menuItems.push(new _CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__["default"](_Action_Action__WEBPACK_IMPORTED_MODULE_1__["default"].ToggleMenu));
      this.menuItems.push(new _MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"]('Close', _Action_Action__WEBPACK_IMPORTED_MODULE_1__["default"].ToggleMenu));
      this.menuItems.push(new _MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"]('Undo', _Action_Action__WEBPACK_IMPORTED_MODULE_1__["default"].Undo));
      this.menuItems.push(new _MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"]('New Random Game', _Globals_Globals__WEBPACK_IMPORTED_MODULE_0__["GAME_DEAL_RANDOM"]));
      this.menuItems.push(new _MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"]('New Solvable Game', _Globals_Globals__WEBPACK_IMPORTED_MODULE_0__["GAME_DEAL_SOLVABLE"]));
      this.menuItems.forEach(function (item) {
        _this.object.appendChild(item.build());
      }); //Write the menu to the document body

      this.parentDocument.appendChild(this.object);
      this.parentDocument.appendChild(this.object2);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      //Add refresh properties
      this.hideReveal();
    }
  }]);

  return GameMenu;
}();



/***/ }),

/***/ "./src/Globals/Globals.js":
/*!********************************!*\
  !*** ./src/Globals/Globals.js ***!
  \********************************/
/*! exports provided: ALL_PILES, CARD_AUTO_MOVE, CARD_MOUSE_DOWN, DETECT_MOBILE_USER, GAME_CARDS_REMAIN, GAME_CHECK_CARD_AGAINST_PILES, GAME_DEAL_RANDOM, GAME_DEAL_SOLVABLE, GAME_FACEDOWN_CARDS_REMAIN, PILE_STOCK_CLICK, REFRESH_SCREEN, WINDOW_MOUSE_MOVE, WINDOW_MOUSE_UP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_PILES", function() { return ALL_PILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_AUTO_MOVE", function() { return CARD_AUTO_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_MOUSE_DOWN", function() { return CARD_MOUSE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETECT_MOBILE_USER", function() { return DETECT_MOBILE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_CARDS_REMAIN", function() { return GAME_CARDS_REMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_CHECK_CARD_AGAINST_PILES", function() { return GAME_CHECK_CARD_AGAINST_PILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_DEAL_RANDOM", function() { return GAME_DEAL_RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_DEAL_SOLVABLE", function() { return GAME_DEAL_SOLVABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_FACEDOWN_CARDS_REMAIN", function() { return GAME_FACEDOWN_CARDS_REMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PILE_STOCK_CLICK", function() { return PILE_STOCK_CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_SCREEN", function() { return REFRESH_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_MOUSE_MOVE", function() { return WINDOW_MOUSE_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_MOUSE_UP", function() { return WINDOW_MOUSE_UP; });
/* harmony import */ var _Action_Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Action/Action */ "./src/Action/Action.js");
/* harmony import */ var _Pile_Pile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pile/Pile */ "./src/Pile/Pile.js");
/* harmony import */ var _Deck_Deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Deck/Deck */ "./src/Deck/Deck.js");
/* harmony import */ var _CardMoves_CardAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardMoves/CardAction */ "./src/CardMoves/CardAction.js");
/* harmony import */ var _CardMoves_MoveCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardMoves/MoveCard */ "./src/CardMoves/MoveCard.js");
/* harmony import */ var _GameBoard_GameBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GameBoard/GameBoard */ "./src/GameBoard/GameBoard.js");
/* harmony import */ var _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Foundation/Foundation */ "./src/Foundation/Foundation.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Tableau/Tableau */ "./src/Tableau/Tableau.js");










var ALL_PILES = function ALL_PILES() {
  return _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.filter(function (obj) {
    return obj instanceof _Pile_Pile__WEBPACK_IMPORTED_MODULE_1__["default"];
  });
}; //Isolate Card


var FIND_CARD = function FIND_CARD(a) {
  //return (a.classList.contains('card'))? a: FIND_CARD(a.parentElement)
  if (a.classList.contains('card')) {
    return a;
  } else {
    return FIND_CARD(a.parentElement);
  }
};

var GET_CARD_OBJECT = function GET_CARD_OBJECT(a) {
  return ALL_PILES().find(function (pile) {
    return pile.cards.find(function (crd) {
      return crd.name == a.id;
    });
  }).cards.find(function (crd) {
    return crd.name == a.id;
  });
};

var REFRESH_SCREEN = function REFRESH_SCREEN() {
  //This routine will cycle through state objects and refresh their related objects.
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.forEach(function (obj) {
    return obj.refresh();
  });
};

var CARD_AUTO_MOVE = function CARD_AUTO_MOVE(fromPile, targetCard, toPile, deal) {
  //This function will move a card from one deck to another in an animated fashion.
  //Eventually this will need to be animated.
  //NEEDS FIXED
  //Create the move object and add it to the state.
  var tempMove = new _CardMoves_MoveCard__WEBPACK_IMPORTED_MODULE_4__["default"](fromPile, fromPile.selectCards(targetCard), toPile);
  if (deal) _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.MOVE_HISTORY.push(tempMove);
};

var CARD_MOUSE_DOWN = function CARD_MOUSE_DOWN(event) {
  //UPDATE STATE
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_MOUSE.DOWN = true; //Capture mousedown target

  var targetCard = FIND_CARD(event.target); //Shortcut if mouse down is on stock.

  if (FIND_PILE_USING_CARD_DOM_ELEMENT(FIND_CARD(event.target)).name === 'stock') {
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TARGET = targetCard;
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.MOUSE_ORIG_POS = [event.clientX, event.clientY];
    CARD_DRAG_START();
    return CARD_DRAG_END();
  } //Double click detection


  if (_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.TIMER && targetCard == _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.TARGET) {
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TARGET = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.TARGET;
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.TARGET = false;
    CARD_DOUBLE_CLICK();
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.STATUS = false;
  } else {
    //Starts double click timer - DO NOT ALTER
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.TARGET = targetCard;
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.TIMER = setTimeout(function () {
      clearTimeout(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.TIMER);
      _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DBL_CLICK.TIMER = false;
    }, 300); //Starts drag timer

    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TARGET = targetCard;
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TIMER = setTimeout(function () {
      if (_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_MOUSE.DOWN) {
        _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.STATUS = true;
        _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TARGET = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TARGET;
        _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TARGET = false;
        CARD_DRAG_START();
      } else {
        _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TARGET = false;
      }

      clearTimeout(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TIMER);
      _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TIMER = false;
    }, 150);
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.MOUSE_ORIG_POS = [event.clientX, event.clientY];
  }
};

var CARD_DRAG_START = function CARD_DRAG_START() {
  //New Method
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE = FIND_PILE_USING_CARD_DOM_ELEMENT(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TARGET); //Works
  //Grab additional cards

  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE.selectCards(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TARGET); //Works
  //Set card drag start POS 

  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS.forEach(function (card) {
    return card.dragStartPOS = [card.getLeft(), card.getTop()];
  });
};

var CARD_DRAG_END = function CARD_DRAG_END() {
  //Identify drop pile my cursor POS on mouseup.
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TO_PILE = ALL_PILES().find(function (pile) {
    return _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS[0] >= pile.getLeft() && _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS[0] <= pile.getRight() && _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS[1] >= pile.getTop() && _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS[1] <= pile.getBottom();
  });

  if (_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE.name === "stock") {
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TO_PILE = ALL_PILES().find(function (pile) {
      return pile.name == 'talon';
    });
  }

  ;

  if (_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TO_PILE) {
    new _CardMoves_CardAction__WEBPACK_IMPORTED_MODULE_3__["default"](_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE, _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS, _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TO_PILE);
  }

  ; //Drop all cards

  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS.forEach(function (crd) {
    return crd.drop();
  }); //Determine if player has won
  //FIX ME
  //Clear drop STATE

  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS = [];
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.MOUSE_ORIG_POS = false;
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE = false;
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.STATUS = false;
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TO_PILE = false;
  REFRESH_SCREEN();
};

var CARD_DOUBLE_CLICK = function CARD_DOUBLE_CLICK() {
  //New Method
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE = FIND_PILE_USING_CARD_DOM_ELEMENT(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TARGET); //Works
  //Capture card object

  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS = [GET_CARD_OBJECT(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TARGET)]; //Set card drag start POS 

  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS.forEach(function (card) {
    return card.dragStartPOS = [card.getLeft(), card.getTop()];
  }); //Shortcut if the drag pile is the stock

  if (_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE.name === 'stock') {
    CARD_DRAG_END();
  } else {
    //Run GAME_CHECK_CARD_AGAINST_PILES
    var toPiles = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
      return pile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_8__["default"] || pile instanceof _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_6__["default"];
    }).filter(function (pile) {
      return _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE != pile;
    });
    GAME_CHECK_CARD_AGAINST_PILES(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE, _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS[0], toPiles);
  } //Exit function


  return true;
};

var FIND_PILE_USING_CARD_DOM_ELEMENT = function FIND_PILE_USING_CARD_DOM_ELEMENT(cardElement) {
  //Take cardElement and cycle through STATE.GAME.OBJECT_TREE to identify and return pile containing card.
  return ALL_PILES().find(function (pile) {
    return pile.hasCard(cardElement.id);
  });
};

var GAME_CARDS_REMAIN = function GAME_CARDS_REMAIN() {
  var activePiles = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
    return !(pile instanceof _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_6__["default"]) && pile instanceof _Pile_Pile__WEBPACK_IMPORTED_MODULE_1__["default"];
  });
  var pilesWithCards = activePiles.filter(function (pile) {
    return pile.cards.length > 0;
  });
  return pilesWithCards.length ? true : false;
};

var GAME_CHECK_CARD_AGAINST_PILES = function GAME_CHECK_CARD_AGAINST_PILES(fromPile, myCard, myPiles) {
  var myPilesTrimmed = myPiles.filter(function (pile) {
    return pile != fromPile;
  });
  var found = false;
  var i = 0;

  while (found == false && i < myPilesTrimmed.length) {
    if (myPilesTrimmed[i].validateMove(myCard)) {
      //Check fromPile aboveCardValue() against toPile topCard.value
      var redundancyCheck = fromPile.aboveCardValue(myCard);
      var valueCheck = myPilesTrimmed[i].cardCount() > 0 ? redundancyCheck != myPilesTrimmed[i].topCard().value : true;

      if (redundancyCheck == false || valueCheck) {
        _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TO_PILE = myPilesTrimmed[i]; //FIX ME - Test Card Action - Not Working

        new _CardMoves_CardAction__WEBPACK_IMPORTED_MODULE_3__["default"](_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.FROM_PILE, _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS, _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.TO_PILE);
        found = true;
      }
    }

    i++;
  }

  return found;
};

var GAME_FACEDOWN_CARDS_REMAIN = function GAME_FACEDOWN_CARDS_REMAIN() {
  var activePiles = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
    return !(pile instanceof _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_6__["default"]) && pile instanceof _Pile_Pile__WEBPACK_IMPORTED_MODULE_1__["default"];
  });
  var pilesWithCards = activePiles.filter(function (pile) {
    return pile.nonFaceCards();
  });
  return pilesWithCards.length ? true : false;
};

var GAME_DEAL = function GAME_DEAL() {
  //This function moves the card from stock to the tableau piles.
  var fromPile = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.find(function (pile) {
    return pile.name == 'stock';
  }); //Deal order

  var dealOrder = [['tableau1', true], ['tableau2', false], ['tableau3', false], ['tableau4', false], ['tableau5', false], ['tableau6', false], ['tableau7', false], ['tableau2', true], ['tableau3', false], ['tableau4', false], ['tableau5', false], ['tableau6', false], ['tableau7', false], ['tableau3', true], ['tableau4', false], ['tableau5', false], ['tableau6', false], ['tableau7', false], ['tableau4', true], ['tableau5', false], ['tableau6', false], ['tableau7', false], ['tableau5', true], ['tableau6', false], ['tableau7', false], ['tableau6', true], ['tableau7', false], ['tableau7', true]]; //Iterate through the deal order and perform the card moves.

  dealOrder.forEach(function (item) {
    var cardArray = [fromPile.topCard()];
    var toPile = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.find(function (pile) {
      return pile.name == item[0];
    });
    if (item[1]) cardArray[0].flip();
    CARD_AUTO_MOVE(fromPile, cardArray, toPile, false);
  });
};

var GAME_DEAL_RANDOM = function GAME_DEAL_RANDOM() {
  //New game
  GAME_NEW_GAME(); //Generates a random deck and places it into the stock.

  var target = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.find(function (item) {
    return item.name === 'stock';
  });
  var myDeck = new _Deck_Deck__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var myGame = _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.find(function (item) {
    return item.name == 'gameBoard';
  });
  myDeck.random(target, myGame); //Create deck string

  var deckString = '';
  target.cards.forEach(function (item) {
    deckString += item.name;
  });
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.DECK_STRING = deckString;
  GAME_DEAL();
};

var GAME_DEAL_SOLVABLE = function GAME_DEAL_SOLVABLE() {
  //New Game
  GAME_NEW_GAME(); //Solvable String

  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.DECK_STRING = "ADJACBASLADLACJACAACKADCASFAHHAHJADGADAASAASMADEADDACDAHBAHMAHIAHCAHFASIACEADKACIACMAHAADMASCAHDASBADHACFAHEACGADBASKASDASHAHKACCAHGACHASGADIADFASJAHLASEACL"; //Build Deck

  var myDeck = new _Deck_Deck__WEBPACK_IMPORTED_MODULE_2__["default"]();
  myDeck.reconstituteDeck(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.DECK_STRING); //Deal the cards

  GAME_DEAL();
  _Action_Action__WEBPACK_IMPORTED_MODULE_0__["default"].ToggleMenu();
};

var GAME_NEW_GAME = function GAME_NEW_GAME() {
  //Create new object tree
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].reset(); //Build new GameBoard

  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.OBJECT_TREE.push(new _GameBoard_GameBoard__WEBPACK_IMPORTED_MODULE_5__["default"]());
};

var DETECT_MOBILE_USER = function DETECT_MOBILE_USER() {
  ["Mobile", "Phone", "Pixel", "Android", "Opera Mini"].forEach(function (device) {
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].GAME.MOBILE_USER = navigator.userAgent.includes(device) ? true : false;
  });
};

var PILE_STOCK_CLICK = function PILE_STOCK_CLICK() {
  var stock = ALL_PILES().find(function (item) {
    return item.name == 'stock';
  });
  var talon = ALL_PILES().find(function (item) {
    return item.name == 'talon';
  });
  talon.cards.reverse();
  talon.cards.forEach(function (card) {
    card.flip();
    stock.cards.push(card);
  });
  talon.cards = [];
  REFRESH_SCREEN();
};

var WINDOW_MOUSE_MOVE = function WINDOW_MOUSE_MOVE(event) {
  //Update STATE with Mouse Position
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS = [event.clientX, event.clientY]; //Action if drag status is true

  if (_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_MOUSE.DOWN) {
    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.STATUS = true; //Set the margin

    var margins = [_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS[0] - _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.MOUSE_ORIG_POS[0], _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS[1] - _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.MOUSE_ORIG_POS[1]]; //Drag the cards

    _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_ACTION.CARDS.forEach(function (card) {
      return card.drag(margins);
    });
  } //Action if drag status is false
  else {
      //Activate menu when mouseover left margin
      if (!_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MENU_OPEN && _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS[0] < 25) {
        _Action_Action__WEBPACK_IMPORTED_MODULE_0__["default"].ToggleMenu();
      }
    }
};

var WINDOW_MOUSE_UP = function WINDOW_MOUSE_UP(event) {
  //UPDATE STATE
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_MOUSE.DOWN = false;
  clearTimeout(_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TIMER);
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TIMER = false;
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.TARGET = false;
  _index__WEBPACK_IMPORTED_MODULE_7__["STATE"].WINDOW.MOUSE_POS = [event.clientX, event.clientY];

  if (_index__WEBPACK_IMPORTED_MODULE_7__["STATE"].CARD_DRAG.STATUS == true) {
    CARD_DRAG_END(event);
  }
};



/***/ }),

/***/ "./src/MenuButton/MenuButton.css":
/*!***************************************!*\
  !*** ./src/MenuButton/MenuButton.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./MenuButton.css */ "./node_modules/css-loader/dist/cjs.js!./src/MenuButton/MenuButton.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/MenuButton/MenuButton.js":
/*!**************************************!*\
  !*** ./src/MenuButton/MenuButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuButton; });
/* harmony import */ var _MenuButton_MenuButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MenuButton/MenuButton.css */ "./src/MenuButton/MenuButton.css");
/* harmony import */ var _MenuButton_MenuButton_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MenuButton_MenuButton_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MenuButton =
/*#__PURE__*/
function () {
  function MenuButton(text, action) {
    _classCallCheck(this, MenuButton);

    this.text = text;
    this.action = action;
    this.object;
    this.build = this.build.bind(this);
  }

  _createClass(MenuButton, [{
    key: "build",
    value: function build() {
      this.object = document.createElement('h1');
      this.object.classList.add('MenuButton');
      this.object.innerText = this.text;
      this.object.onclick = this.action;
      return this.object;
    }
  }, {
    key: "object",
    value: function object() {
      this.object;
    }
  }]);

  return MenuButton;
}();



/***/ }),

/***/ "./src/Pile/Pile.css":
/*!***************************!*\
  !*** ./src/Pile/Pile.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Pile.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pile/Pile.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/Pile/Pile.js":
/*!**************************!*\
  !*** ./src/Pile/Pile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pile; });
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card/Card */ "./src/Card/Card.js");
/* harmony import */ var _Pile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pile.css */ "./src/Pile/Pile.css");
/* harmony import */ var _Pile_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Pile_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Pile =
/*#__PURE__*/
function () {
  function Pile(parent, name) {
    _classCallCheck(this, Pile);

    this.parent = parent;
    this.name = name;
    this.cssClasses = ['topPile'];
    this.cards = [];
    this.aboveCardValue = this.aboveCardValue.bind(this);
    this.addCards = this.addCards.bind(this);
    this.cardCount = this.cardCount.bind(this);
    this.destruct = this.destruct.bind(this);
    this.element = this.element.bind(this);
    this.faceCards = this.faceCards.bind(this);
    this.getBottom = this.getBottom.bind(this);
    this.getHeight = this.getHeight.bind(this);
    this.getLeft = this.getLeft.bind(this);
    this.getRight = this.getRight.bind(this);
    this.getTop = this.getTop.bind(this);
    this.getWidth = this.getWidth.bind(this);
    this.hasCard = this.hasCard.bind(this);
    this.nonFaceCards = this.nonFaceCards.bind(this);
    this.refresh = this.refresh.bind(this);
    this.removeCards = this.removeCards.bind(this);
    this.selectCards = this.selectCards.bind(this);
    this.topCard = this.topCard.bind(this);
  }

  _createClass(Pile, [{
    key: "aboveCardValue",
    value: function aboveCardValue(myCard) {
      var i = this.cards.indexOf(myCard);
      return i > 0 ? this.cards[i - 1].value : false;
    }
  }, {
    key: "addCards",
    value: function addCards(cards) {
      var _this = this;

      cards.forEach(function (card) {
        _this.cards.push(card);
      });
    }
  }, {
    key: "cardCount",
    value: function cardCount() {
      return this.cards.length;
    }
  }, {
    key: "destruct",
    value: function destruct() {
      this.cards.forEach(function (crd) {
        return crd.destruct();
      });
      this.element().remove();
    }
  }, {
    key: "element",
    value: function element() {
      return document.getElementById(this.name);
    }
  }, {
    key: "faceCards",
    value: function faceCards() {
      return this.cardCount() > 0 ? this.cards.filter(function (crd) {
        return crd.face == true;
      }) : false;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.getTop() + this.element().offsetHeight;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element().offsetHeight;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.element().offsetLeft;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.getLeft() + this.element().offsetWidth;
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.element().offsetTop;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.element().offsetWidth;
    }
  }, {
    key: "hasCard",
    value: function hasCard(cardName) {
      return this.cards.find(function (crd) {
        return crd.name == cardName;
      }) ? true : false;
    }
  }, {
    key: "nonFaceCards",
    value: function nonFaceCards() {
      if (this.cardCount() > 0) {
        var tempArray = this.cards.filter(function (crd) {
          return crd.face == false;
        });

        if (tempArray.length > 0) {
          return tempArray;
        } else {
          return false;
        }
      }
    }
  }, {
    key: "topCard",
    value: function topCard() {
      return !!this.cards ? this.cards[this.cards.length - 1] : false;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this2 = this;

      this.cards.forEach(function (card) {
        card.setTop(_this2.element().offsetTop);
        card.setLeft(_this2.element().offsetLeft);
        card.setZIndex(_this2.cards.indexOf(card));
      });
    }
  }, {
    key: "removeCards",
    value: function removeCards(cards) {
      var tempCards = cards instanceof _Card_Card__WEBPACK_IMPORTED_MODULE_0__["default"] ? [cards] : cards;
      var cardIndex = this.cards.findIndex(function (item) {
        return item.name === tempCards[0].name;
      });
      return this.cards.splice(cardIndex, this.cards.length - cardIndex);
    }
  }, {
    key: "selectCards",
    value: function selectCards(currentCard) {
      //Find index of current card
      var cardIndex = this.cards.findIndex(function (item) {
        return item.name === currentCard.id;
      });
      return this.cards.slice(cardIndex, this.cards.length);
    }
  }]);

  return Pile;
}();



/***/ }),

/***/ "./src/QuickSolve/QuickSolve.css":
/*!***************************************!*\
  !*** ./src/QuickSolve/QuickSolve.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./QuickSolve.css */ "./node_modules/css-loader/dist/cjs.js!./src/QuickSolve/QuickSolve.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/QuickSolve/QuickSolve.js":
/*!**************************************!*\
  !*** ./src/QuickSolve/QuickSolve.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuickSolve; });
/* harmony import */ var _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Foundation/Foundation */ "./src/Foundation/Foundation.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _QuickSolve_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickSolve.css */ "./src/QuickSolve/QuickSolve.css");
/* harmony import */ var _QuickSolve_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_QuickSolve_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Talon_Talon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Talon/Talon */ "./src/Talon/Talon.js");
/* harmony import */ var _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tableau/Tableau */ "./src/Tableau/Tableau.js");
/* harmony import */ var _Stock_Stock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Stock/Stock */ "./src/Stock/Stock.js");
/* harmony import */ var _Globals_Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Globals/Globals */ "./src/Globals/Globals.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var QuickSolve =
/*#__PURE__*/
function () {
  function QuickSolve(parent) {
    _classCallCheck(this, QuickSolve);

    this.solve = this.solve.bind(this);
    this.name = "quickSolve";
    this.clickEvents = [{
      trigger: "click",
      action: this.solve
    }];
    this.parent = parent;
    this.solveTimer = false;
    this.checkTableauBottomCards = this.checkTableauBottomCards.bind(this);
    this.checkTableauTopCards = this.checkTableauTopCards.bind(this);
    this.destruct = this.destruct.bind(this);
    this.element = this.element.bind(this);
    this.getFoundations = this.getFoundations.bind(this);
    this.getStock = this.getStock.bind(this);
    this.getTalon = this.getTalon.bind(this);
    this.getTableau = this.getTableau.bind(this);
    this.refresh = this.refresh.bind(this);
    this.render = this.render.bind(this);
    this.showHide = this.showHide.bind(this);
    this.solve = this.solve.bind(this);
    this.render();
  }

  _createClass(QuickSolve, [{
    key: "element",
    value: function element() {
      return document.getElementById(this.name);
    }
  }, {
    key: "destruct",
    value: function destruct() {
      var _this = this;

      this.clickEvents.forEach(function (item) {
        _this.element().removeEventListener(item.trigger, item.action);
      });
      this.element().remove();
    }
  }, {
    key: "getFoundations",
    value: function getFoundations() {
      return _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
        return pile instanceof _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
    }
  }, {
    key: "getStock",
    value: function getStock() {
      return _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.find(function (pile) {
        return pile instanceof _Stock_Stock__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
    }
  }, {
    key: "getTalon",
    value: function getTalon() {
      return _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.find(function (pile) {
        return pile instanceof _Talon_Talon__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
    }
  }, {
    key: "getTableau",
    value: function getTableau() {
      return _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
        return pile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.showHide();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var me = document.createElement('button');
      me.id = this.name;
      me.innerText = "Quick Solve";
      this.parent.element().appendChild(me);
      this.clickEvents.forEach(function (item) {
        _this2.element().addEventListener(item.trigger, item.action);
      });
      this.showHide();
    }
  }, {
    key: "solve",
    value: function solve() {
      var _this3 = this;

      this.solveTimer = setInterval(function () {
        if (Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_6__["GAME_CARDS_REMAIN"])()) {
          //Master Action
          if (!_this3.checkTableauTopCards()) {
            //Check the Tableau topCard();
            if (!_this3.checkTableauBottomCards()) {
              //Check the Tableau bottomCard;
              if (!_this3.checkTalon()) {
                //Check the Talon topCard();
                var stockPile = _this3.getStock();

                if (stockPile.cardCount() > 0) {
                  var targetCard = stockPile.topCard().element();
                  var event = {
                    target: targetCard
                  };
                  Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_6__["CARD_MOUSE_DOWN"])(event);
                } else {
                  Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_6__["PILE_STOCK_CLICK"])();
                }
              }
            }
          }
        } else {
          _this3.solveTimer = false;
        }
      }, 100);
    }
  }, {
    key: "checkTableauBottomCards",
    value: function checkTableauBottomCards() {
      var toPiles = _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
        return pile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      var tempFromPiles = _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
        return pile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"] && pile.cardCount() > 0;
      });
      var fromPiles = tempFromPiles.filter(function (pile) {
        if (pile.faceCards()) {
          if (pile.faceCards()[0].value == "M" && pile.nonFaceCards() == false) {
            return false;
          } else {
            return true;
          }
        }
      });
      var found = false;
      var i = 0;

      while (found == false && i < fromPiles.length) {
        _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_FROM_PILE = fromPiles[i];
        _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS = fromPiles[i].faceCards();

        if (Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_6__["GAME_CHECK_CARD_AGAINST_PILES"])(_index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_FROM_PILE, _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS[0], toPiles)) {
          found = true;
        }

        ;
        i++;
      }

      return found;
    }
  }, {
    key: "checkTableauTopCards",
    value: function checkTableauTopCards() {
      //Create toPiles and fromPiles array
      var toPiles = Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_6__["GAME_FACEDOWN_CARDS_REMAIN"])() ? _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
        return pile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"] || pile instanceof _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_0__["default"];
      }) : _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
        return pile instanceof _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      var fromPiles = _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
        return pile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"] && pile.cardCount() > 0;
      });
      var tempFromPiles = fromPiles.filter(function (pile) {
        if (pile.topCard().value == "M" && !pile.nonFaceCards() && Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_6__["GAME_FACEDOWN_CARDS_REMAIN"])()) {
          return false;
        } else {
          return true;
        }
      });
      var found = false;
      var i = 0;

      while (found == false && i < tempFromPiles.length) {
        _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_FROM_PILE = tempFromPiles[i];
        _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS = [tempFromPiles[i].topCard()];

        if (Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_6__["GAME_CHECK_CARD_AGAINST_PILES"])(_index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_FROM_PILE, _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS[0], toPiles)) {
          found = true;
        }

        ;
        i++;
      }

      return found;
    }
  }, {
    key: "checkTalon",
    value: function checkTalon() {
      _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS = _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.find(function (pile) {
        return pile instanceof _Talon_Talon__WEBPACK_IMPORTED_MODULE_3__["default"];
      });

      if (_index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS.cardCount()) {
        var toPiles = _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME.OBJECT_TREE.filter(function (pile) {
          return pile instanceof _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_4__["default"] || pile instanceof _Foundation_Foundation__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
        _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS = [_index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS.topCard()];
        return Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_6__["GAME_CHECK_CARD_AGAINST_PILES"])(_index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS, _index__WEBPACK_IMPORTED_MODULE_1__["STATE"].CARD_ACTION_CARDS, toPiles);
      }

      return false;
    }
  }, {
    key: "showHide",
    value: function showHide() {
      if (_index__WEBPACK_IMPORTED_MODULE_1__["STATE"].GAME_WIN_DETECTED) {
        this.element().classList.remove("hide");
      } else {
        this.element().classList.add("hide");
      }
    }
  }]);

  return QuickSolve;
}();



/***/ }),

/***/ "./src/State/State.js":
/*!****************************!*\
  !*** ./src/State/State.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//STATE should be accessed and updated only through GLOBALS?
var State =
/*#__PURE__*/
function () {
  function State() {
    _classCallCheck(this, State);

    //Captures the action card
    this.CARD_ACTION = {
      CARDS: [],
      FROM_PILE: false,
      MOUSE_ORIG_POS: false,
      TARGET: false,
      TO_PILE: false
    };
    this.CARD_DBL_CLICK = {
      STATUS: false,
      //Unused, but might be used
      TARGET: false,
      TIMER: false
    };
    this.CARD_DRAG = {
      STATUS: false,
      TARGET: false,
      TIMER: false
    };
    this.CARD_MOUSE = {
      DOWN: false,
      //Tracks current mouse down status
      DOWN_TIMER: false //Delayed cancelation of the mouse down action

    };
    this.GAME = {
      DECK_STRING: false,
      MOBILE_USER: false,
      MOVE_HISTORY: [],
      OBJECT_TREE: [],
      WIN_DETECTED: false
    };
    this.WINDOW = {
      MENU_OPEN: true,
      MOUSE_POS: false
    };
    this.reset = this.reset.bind(this);
  }

  _createClass(State, [{
    key: "reset",
    value: function reset() {
      this.GAME.OBJECT_TREE.forEach(function (item) {
        item.destruct();
      });
      this.CARD_ACTION = {
        CARDS: [],
        FROM_PILE: false,
        MOUSE_ORIG_POS: false,
        TARGET: false,
        TO_PILE: false
      };
      this.CARD_DBL_CLICK = {
        STATUS: false,
        //Unused, but might be used
        TARGET: false,
        TIMER: false
      };
      this.CARD_DRAG = {
        STATUS: false,
        TARGET: false,
        TIMER: false
      };
      this.CARD_MOUSE = {
        DOWN: false,
        //Tracks current mouse down status
        DOWN_TIMER: false //Delayed cancelation of the mouse down action

      };
      this.GAME = {
        DECK_STRING: false,
        MOBILE_USER: false,
        MOVE_HISTORY: [],
        OBJECT_TREE: [],
        WIN_DETECTED: false
      };
      this.WINDOW = {
        MENU_OPEN: true,
        MOUSE_POS: false
      };
    }
  }]);

  return State;
}();



/***/ }),

/***/ "./src/Stock/Stock.js":
/*!****************************!*\
  !*** ./src/Stock/Stock.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stock; });
/* harmony import */ var _Pile_Pile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pile/Pile */ "./src/Pile/Pile.js");
/* harmony import */ var _Globals_Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Globals/Globals */ "./src/Globals/Globals.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Stock =
/*#__PURE__*/
function (_Pile) {
  _inherits(Stock, _Pile);

  function Stock(parent, name) {
    var _this;

    _classCallCheck(this, Stock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stock).call(this, parent, name));
    _this.clickEvents = [{
      trigger: "mousedown",
      action: _Globals_Globals__WEBPACK_IMPORTED_MODULE_1__["PILE_STOCK_CLICK"]
    }];
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.validateMove = _this.validateMove.bind(_assertThisInitialized(_this));

    _this.render();

    return _this;
  }

  _createClass(Stock, [{
    key: "render",
    value: function render() {
      var me = document.createElement('div');
      me.id = this.name;
      me.style.zIndex = 0;
      this.cssClasses.forEach(function (item) {
        return me.classList.add(item);
      });
      this.parent.element().appendChild(me);
      this.clickEvents.forEach(function (item) {
        return me.addEventListener(item.trigger, item.action);
      });
    }
  }, {
    key: "validateMove",
    value: function validateMove(aCard) {
      console.log('Validate Move');
    }
  }]);

  return Stock;
}(_Pile_Pile__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Tableau/Tableau.css":
/*!*********************************!*\
  !*** ./src/Tableau/Tableau.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Tableau.css */ "./node_modules/css-loader/dist/cjs.js!./src/Tableau/Tableau.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/Tableau/Tableau.js":
/*!********************************!*\
  !*** ./src/Tableau/Tableau.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tableau; });
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card/Card */ "./src/Card/Card.js");
/* harmony import */ var _Pile_Pile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pile/Pile */ "./src/Pile/Pile.js");
/* harmony import */ var _Conversion_Conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Conversion/Conversion */ "./src/Conversion/Conversion.js");
/* harmony import */ var _Tableau_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tableau.css */ "./src/Tableau/Tableau.css");
/* harmony import */ var _Tableau_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tableau_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Tableau =
/*#__PURE__*/
function (_Pile) {
  _inherits(Tableau, _Pile);

  function Tableau(parent, name) {
    var _this;

    _classCallCheck(this, Tableau);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tableau).call(this, parent, name));
    _this.cssClasses = ['tableau'];
    _this.limit = name.charAt(name.length - 1);
    _this.refresh = _this.refresh.bind(_assertThisInitialized(_this));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.solved = _this.solved.bind(_assertThisInitialized(_this));
    _this.validateMove = _this.validateMove.bind(_assertThisInitialized(_this));

    _this.render();

    return _this;
  }

  _createClass(Tableau, [{
    key: "solved",
    value: function solved() {
      return this.cards.find(function (crd) {
        return crd.face == false;
      }) instanceof _Card_Card__WEBPACK_IMPORTED_MODULE_0__["default"] ? false : true;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this2 = this;

      if (this.cards.length) {
        var marginTotal = 0;
        this.cards.forEach(function (card) {
          card.setTop(_this2.element().offsetTop + marginTotal);
          var baseMargin = card.getHeight() / 4;
          marginTotal = card.face ? marginTotal + baseMargin : marginTotal + baseMargin / 2;
          card.setLeft(_this2.getLeft());
          card.setZIndex(_this2.cards.indexOf(card));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var me = document.createElement('div');
      me.id = this.name;
      me.style.zIndex = 0;
      this.cssClasses.forEach(function (item) {
        return me.classList.add(item);
      });
      this.parent.element().appendChild(me);
    }
  }, {
    key: "validateMove",
    value: function validateMove(aCard) {
      var tempCard = [];

      if (aCard instanceof _Card_Card__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        tempCard.push(aCard);
      } else {
        tempCard = aCard;
      }

      if (this.cards.length) {
        if (tempCard[0].color != this.topCard().color && Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_2__["FromAlpha"])(tempCard[0].value) == Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_2__["FromAlpha"])(this.topCard().value) - 1) {
          return true;
        } else {
          return false;
        }
      } else if (Object(_Conversion_Conversion__WEBPACK_IMPORTED_MODULE_2__["FromAlpha"])(tempCard[0].value) == 12) {
        return true;
      }
    }
  }]);

  return Tableau;
}(_Pile_Pile__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/Talon/Talon.js":
/*!****************************!*\
  !*** ./src/Talon/Talon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Talon; });
/* harmony import */ var _Pile_Pile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pile/Pile */ "./src/Pile/Pile.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Talon =
/*#__PURE__*/
function (_Pile) {
  _inherits(Talon, _Pile);

  function Talon(parent, name) {
    var _this;

    _classCallCheck(this, Talon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Talon).call(this, parent, name));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.validateMove = _this.validateMove.bind(_assertThisInitialized(_this));

    _this.render();

    return _this;
  }

  _createClass(Talon, [{
    key: "render",
    value: function render() {
      var me = document.createElement('div');
      me.id = this.name;
      me.style.zIndex = 0;
      this.cssClasses.forEach(function (item) {
        return me.classList.add(item);
      });
      this.parent.element().appendChild(me);
    }
  }, {
    key: "validateMove",
    value: function validateMove(aCard) {}
  }]);

  return Talon;
}(_Pile_Pile__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: STATE, GAME_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_MENU", function() { return GAME_MENU; });
/* harmony import */ var _GameMenu_GameMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameMenu/GameMenu */ "./src/GameMenu/GameMenu.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Globals_Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Globals/Globals */ "./src/Globals/Globals.js");
/* harmony import */ var _State_State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State/State */ "./src/State/State.js");




var STATE = new _State_State__WEBPACK_IMPORTED_MODULE_3__["default"]();
var GAME_MENU = new _GameMenu_GameMenu__WEBPACK_IMPORTED_MODULE_0__["default"](document.body);

Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_2__["DETECT_MOBILE_USER"])();
Object(_Globals_Globals__WEBPACK_IMPORTED_MODULE_2__["REFRESH_SCREEN"])();
window.addEventListener('resize', _Globals_Globals__WEBPACK_IMPORTED_MODULE_2__["REFRESH_SCREEN"]);
window.addEventListener('orientationchange', _Globals_Globals__WEBPACK_IMPORTED_MODULE_2__["REFRESH_SCREEN"]);
window.addEventListener('mousemove', _Globals_Globals__WEBPACK_IMPORTED_MODULE_2__["WINDOW_MOUSE_MOVE"]);
window.addEventListener('mouseup', _Globals_Globals__WEBPACK_IMPORTED_MODULE_2__["WINDOW_MOUSE_UP"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhcmQvQ2FyZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Nsb3NlQnV0dG9uL0Nsb3NlQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm91bmRhdGlvbi9Gb3VuZGF0aW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZUJvYXJkL0dhbWVCb2FyZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVNZW51L0dhbWVNZW51LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVudUJ1dHRvbi9NZW51QnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGlsZS9QaWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpY2tTb2x2ZS9RdWlja1NvbHZlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVhdS9UYWJsZWF1LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BY3Rpb24vQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9DYXJkL0NhcmQuY3NzPzgwOWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhcmQvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FyZE1vdmVzL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhcmRNb3Zlcy9DYXJkQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9DYXJkTW92ZXMvQ29tYmluZWRNb3ZlLmpzIiwid2VicGFjazovLy8uL3NyYy9DYXJkTW92ZXMvRmxpcENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhcmRNb3Zlcy9Nb3ZlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvc2VCdXR0b24vQ2xvc2VCdXR0b24uY3NzP2U5YjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Nsb3NlQnV0dG9uL0Nsb3NlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db252ZXJzaW9uL0NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlY2svRGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm91bmRhdGlvbi9Gb3VuZGF0aW9uLmNzcz84MjE2Iiwid2VicGFjazovLy8uL3NyYy9Gb3VuZGF0aW9uL0ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVCb2FyZC9HYW1lQm9hcmQuY3NzPzg1NGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVCb2FyZC9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVNZW51L0dhbWVNZW51LmNzcz80YjE4Iiwid2VicGFjazovLy8uL3NyYy9HYW1lTWVudS9HYW1lTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFscy9HbG9iYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9NZW51QnV0dG9uL01lbnVCdXR0b24uY3NzPzk2NmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbnVCdXR0b24vTWVudUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGlsZS9QaWxlLmNzcz83ZWM5Iiwid2VicGFjazovLy8uL3NyYy9QaWxlL1BpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1aWNrU29sdmUvUXVpY2tTb2x2ZS5jc3M/ZWEyYiIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpY2tTb2x2ZS9RdWlja1NvbHZlLmpzIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvY2svU3RvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlYXUvVGFibGVhdS5jc3M/NDUwMyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVhdS9UYWJsZWF1LmpzIiwid2VicGFjazovLy8uL3NyYy9UYWxvbi9UYWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZ2dsZU1lbnUiLCJTVEFURSIsIldJTkRPVyIsIk1FTlVfT1BFTiIsIkdBTUVfTUVOVSIsIm9iamVjdCIsImNsYXNzTGlzdCIsImFkZCIsIm9iamVjdDIiLCJyZW1vdmUiLCJVbmRvIiwiR0FNRSIsIk1PVkVfSElTVE9SWSIsImxlbmd0aCIsIm1vdmUiLCJwb3AiLCJyZXZlcnNlIiwiQWN0aW9uIiwiQ2FyZCIsInNldCIsInN1aXRlIiwidmFsdWUiLCJwYXJlbnQiLCJmYWNlIiwiY29sb3IiLCJ2YWx1ZVN5bWJvbCIsIlRvRmFjZVZhbHVlIiwic3VpdGVTeW1ib2wiLCJUb1N5bWJvbCIsIm5hbWUiLCJkcmFnU3RhcnRQT1MiLCJ6SW5kZXgiLCJjbGlja0V2ZW50cyIsInRyaWdnZXIiLCJhY3Rpb24iLCJDQVJEX01PVVNFX0RPV04iLCJjc3NDbGFzc2VzIiwiYWRkQ2xhc3MiLCJiaW5kIiwiZGVzdHJ1Y3QiLCJkcmFnIiwiZHJvcCIsImVsZW1lbnQiLCJmbGlwIiwiZ2V0RmFjZSIsImdldFRvcCIsImdldExlZnQiLCJnZXRIZWlnaHQiLCJnZXRXaWR0aCIsInJlbW92ZUNsYXNzIiwicmVuZGVyIiwic2V0VG9wIiwic2V0TGVmdCIsInNldFpJbmRleCIsImEiLCJtYXJnaW4iLCJzdHlsZSIsImZvckVhY2giLCJpdGVtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJtZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJpZCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInkiLCJ0b3AiLCJ4IiwibGVmdCIsInoiLCJCYXNlIiwiZmluaXNoIiwiQ0FSRF9BQ1RJT04iLCJDQVJEUyIsImNyZCIsIlJFRlJFU0hfU0NSRUVOIiwiQ2FyZEFjdGlvbiIsImZyb21QaWxlIiwiY2FyZHMiLCJ0b1BpbGUiLCJhY3Rpb25zIiwiYXNzZXNzIiwiZXhlY3V0ZSIsImdldFBpbGUiLCJTdG9jayIsInB1c2giLCJGbGlwQ2FyZCIsIk1vdmVDYXJkIiwidmFsaWRhdGVNb3ZlIiwiVGFibGVhdSIsInRvcENhcmQiLCJDb21iaW5lZE1vdmUiLCJPQkpFQ1RfVFJFRSIsImZpbmQiLCJwaWxlIiwiR2FtZUJvYXJkIiwiZGV0ZWN0V2luIiwiV0lOX0RFVEVDVEVEIiwiQUxMX1BJTEVTIiwiY2FyZCIsImFkZENhcmRzIiwicmVtb3ZlQ2FyZHMiLCJDbG9zZUJ1dHRvbiIsImJ1aWxkIiwiYnV0dG9uIiwib25jbGljayIsIkFscGhhU2NhbGUiLCJDYXJkU3ltYm9scyIsIkNhcmRWYWx1ZXMiLCJTdWl0ZVNjYWxlIiwiRnJvbUFscGhhIiwiaW5kZXhPZiIsIlRvQWxwaGEiLCJGcm9tRmFjZVZhbHVlIiwiRnJvbVN5bWJvbCIsIlN1aXRlVmFsdWVzIiwic2xpY2UiLCJTdWl0ZVN5bWJvbHMiLCJEZWNrIiwicmFuZG9tIiwicmFuZG9taXplQXJyYXkiLCJyZWNvbnN0aXR1dGVEZWNrIiwic29sdmFibGUiLCJmYWlsZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidGhlbiIsInN0dWZmIiwiZXJyb3IiLCJub3RpY2UiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm15UGFyZW50IiwiYm9hcmQiLCJ0ZW1wRGVjayIsIm51bWJlciIsInNodWZmbGVkIiwibXlBcnJheSIsIm5ld0FycmF5Iiwic3BsaWNlIiwiTWF0aCIsImZsb29yIiwiZGVja1N0cmluZyIsImluZGl2aWR1YWxDYXJkcyIsImkiLCJGb3VuZGF0aW9uIiwiaW5uZXJUZXh0IiwiYUNhcmQiLCJ0ZW1wQ2FyZCIsImNhcmRDb3VudCIsIlBpbGUiLCJhbGxUYWJsZWF1IiwicmVmcmVzaCIsImZpbHRlciIsInNvbHZlZCIsImJvZHkiLCJUYWxvbiIsIlF1aWNrU29sdmUiLCJHYW1lTWVudSIsInBhcmVudERvY3VtZW50IiwibWVudUl0ZW1zIiwiTWVudUJ1dHRvbiIsIkdBTUVfREVBTF9SQU5ET00iLCJHQU1FX0RFQUxfU09MVkFCTEUiLCJoaWRlUmV2ZWFsIiwib2JqIiwiRklORF9DQVJEIiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwiR0VUX0NBUkRfT0JKRUNUIiwiQ0FSRF9BVVRPX01PVkUiLCJ0YXJnZXRDYXJkIiwiZGVhbCIsInRlbXBNb3ZlIiwic2VsZWN0Q2FyZHMiLCJldmVudCIsIkNBUkRfTU9VU0UiLCJET1dOIiwidGFyZ2V0IiwiRklORF9QSUxFX1VTSU5HX0NBUkRfRE9NX0VMRU1FTlQiLCJUQVJHRVQiLCJNT1VTRV9PUklHX1BPUyIsImNsaWVudFgiLCJjbGllbnRZIiwiQ0FSRF9EUkFHX1NUQVJUIiwiQ0FSRF9EUkFHX0VORCIsIkNBUkRfREJMX0NMSUNLIiwiVElNRVIiLCJDQVJEX0RPVUJMRV9DTElDSyIsIlNUQVRVUyIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJDQVJEX0RSQUciLCJGUk9NX1BJTEUiLCJUT19QSUxFIiwiTU9VU0VfUE9TIiwiZ2V0UmlnaHQiLCJnZXRCb3R0b20iLCJ0b1BpbGVzIiwiR0FNRV9DSEVDS19DQVJEX0FHQUlOU1RfUElMRVMiLCJjYXJkRWxlbWVudCIsImhhc0NhcmQiLCJHQU1FX0NBUkRTX1JFTUFJTiIsImFjdGl2ZVBpbGVzIiwicGlsZXNXaXRoQ2FyZHMiLCJteUNhcmQiLCJteVBpbGVzIiwibXlQaWxlc1RyaW1tZWQiLCJmb3VuZCIsInJlZHVuZGFuY3lDaGVjayIsImFib3ZlQ2FyZFZhbHVlIiwidmFsdWVDaGVjayIsIkdBTUVfRkFDRURPV05fQ0FSRFNfUkVNQUlOIiwibm9uRmFjZUNhcmRzIiwiR0FNRV9ERUFMIiwiZGVhbE9yZGVyIiwiY2FyZEFycmF5IiwiR0FNRV9ORVdfR0FNRSIsIm15RGVjayIsIm15R2FtZSIsIkRFQ0tfU1RSSU5HIiwicmVzZXQiLCJERVRFQ1RfTU9CSUxFX1VTRVIiLCJkZXZpY2UiLCJNT0JJTEVfVVNFUiIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluY2x1ZGVzIiwiUElMRV9TVE9DS19DTElDSyIsInN0b2NrIiwidGFsb24iLCJXSU5ET1dfTU9VU0VfTU9WRSIsIm1hcmdpbnMiLCJXSU5ET1dfTU9VU0VfVVAiLCJ0ZXh0IiwiZmFjZUNhcmRzIiwiY2FyZE5hbWUiLCJ0ZW1wQXJyYXkiLCJ0ZW1wQ2FyZHMiLCJjYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJjdXJyZW50Q2FyZCIsInNvbHZlIiwic29sdmVUaW1lciIsImNoZWNrVGFibGVhdUJvdHRvbUNhcmRzIiwiY2hlY2tUYWJsZWF1VG9wQ2FyZHMiLCJnZXRGb3VuZGF0aW9ucyIsImdldFN0b2NrIiwiZ2V0VGFsb24iLCJnZXRUYWJsZWF1Iiwic2hvd0hpZGUiLCJzZXRJbnRlcnZhbCIsImNoZWNrVGFsb24iLCJzdG9ja1BpbGUiLCJ0ZW1wRnJvbVBpbGVzIiwiZnJvbVBpbGVzIiwiQ0FSRF9BQ1RJT05fRlJPTV9QSUxFIiwiQ0FSRF9BQ1RJT05fQ0FSRFMiLCJHQU1FX1dJTl9ERVRFQ1RFRCIsIlN0YXRlIiwiRE9XTl9USU1FUiIsImNvbnNvbGUiLCJsb2ciLCJsaW1pdCIsImNoYXJBdCIsIm1hcmdpblRvdGFsIiwiYmFzZU1hcmdpbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztR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QUwsQ0FBZ0JxQixPQUFoQixDQUF3QixVQUFBQyxJQUFJO0FBQUEsZUFBSVEsRUFBRSxDQUFDNUQsU0FBSCxDQUFhQyxHQUFiLENBQWlCbUQsSUFBakIsQ0FBSjtBQUFBLE9BQTVCO0FBQ0EsV0FBS3BDLE1BQUwsQ0FBWW9CLE9BQVosR0FBc0I0QixXQUF0QixDQUFrQ0osRUFBbEM7QUFDSDs7O2lDQUVZaUcsSyxFQUFNLENBQ2xCOzs7O0VBakI4Qkcsa0Q7Ozs7Ozs7Ozs7Ozs7QUNGbkMsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSXJLLEtBQUssR0FBRyxJQUFJa1Isb0RBQUosRUFBWjtBQUNBLElBQUkvUSxTQUFTLEdBQUcsSUFBSTBLLDBEQUFKLENBQWFsSCxRQUFRLENBQUMrRyxJQUF0QixDQUFoQjtBQUNBO0FBRUFtRSwyRUFBa0I7QUFDbEI1Six1RUFBYztBQUVkeU0sTUFBTSxDQUFDcE4sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NXLCtEQUFsQztBQUNBeU0sTUFBTSxDQUFDcE4sZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDVywrREFBN0M7QUFDQXlNLE1BQU0sQ0FBQ3BOLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDZ0wsa0VBQXJDO0FBQ0FvQyxNQUFNLENBQUNwTixnQkFBUCxDQUF3QixTQUF4QixFQUFtQ2tMLGdFQUFuQyxFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuUywgLkMge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ELCAuSCB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkRnJvbnQge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDYwJSAyMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygyMC40Mzk3dncgKiAuMjApIGF1dG8gY2FsYygyMC40Mzk3dncgKiAuMjApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDF2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRGcm9udCBoMiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogY2FsYygyMC40Mzk3dncgKiAuMjApO1xcclxcbiAgICBsaW5lLWhlaWdodDogY2FsYygyMC40Mzk3dncgKiAuMjApO1xcclxcbiAgICB3aWR0aDogY2FsYygyMC40Mzk3dncgKiAuMjApO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZFRvcExlZnQge1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxufVxcclxcblxcclxcbi5jYXJkVG9wUmlnaHQge1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxufVxcclxcblxcclxcbi5jYXJkTWlkZGxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogY2FsYygyMC40Mzk3dncgKi42KTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMjAuNDM5N3Z3ICouNik7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJvdHRvbUxlZnQge1xcclxcbiAgICBncmlkLXJvdzogMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQm90dG9tUmlnaHQge1xcclxcbiAgICBncmlkLXJvdzogMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQmFjayB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxdmg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogcmlkZ2UgZ3Jvb3ZlIGdyb292ZSByaWRnZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXZ3O1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJhY2sgaDEsIGgyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRUb3AsIC5jYXJkQm90dG9tIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogY2FsYygyMC40Mzk3dncgKiAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJhY2ssIC5jYXJkRnJvbnQsIC5tb2JpbGVDYXJkRnJvbnQge1xcclxcbiAgICBoZWlnaHQ6IDIwLjQ0NDE0NDM3dnc7XFxyXFxuICAgIHdpZHRoOiAxMy4xNDI4NTcxNHZ3O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwxODAsMjU1KTtcXHJcXG4gICAgb3BhY2l0eTogODA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiA3NDEvNzQxKSB7XFxyXFxuICAgIC5jYXJkRnJvbnQgaDIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDIwLjQzOTd2aCAqIC4yMCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogY2FsYygyMC40Mzk3dmggKiAuMjApO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMjAuNDM5N3ZoICogLjIwKTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZoO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZEZyb250IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygyMC40Mzk3dmggKiAuMjApIGF1dG8gY2FsYygyMC40Mzk3dmggKiAuMjApO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXZoO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZE1pZGRsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMjAuNDM5N3ZoICouNik7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogY2FsYygyMC40Mzk3dmggKi42KTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogOHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkQmFjayB7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDF2aDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmRUb3AsIC5jYXJkQm90dG9tIHtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygyMC40Mzk3dmggKiAuMjUpO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZEJhY2ssIC5jYXJkRnJvbnQsIC5tb2JpbGVDYXJkRnJvbnQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMC40NDQxNDQzN3ZoO1xcclxcbiAgICAgICAgd2lkdGg6IDEzLjE0Mjg1NzE0dmg7XFxyXFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5DbG9zZUJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5DbG9zZUJ1dHRvbiA+IGgxe1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5DbG9zZUJ1dHRvbiA+IGgxOmhvdmVye1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcwKTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvdW5kYXRpb24ge1xcclxcbiAgICBib3JkZXI6IDFweCBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXZ3O1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN5bWJvbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTR2dztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTMuMTR2dztcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGVTeW1ib2wge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXZ3O1xcclxcbiAgICBmb250LXNpemU6IDh2dztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTMuMTR2dztcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiA3NDEgLyA3NDEpIHtcXHJcXG4gICAgLnN5bWJvbCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1dmg7XFxyXFxuICAgICAgICB3aWR0aDogMTMuMTR2aDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm1vYmlsZVN5bWJvbCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNXZoO1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4dmg7XFxyXFxuICAgICAgICB3aWR0aDogMTMuMTR2aDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDF2aDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNnYW1lQm9hcmQge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDF2dyAxMy4xNDI4NTcxNHZ3IDF2dyAxMy4xNDI4NTcxNHZ3IDF2dyAxMy4xNDI4NTcxNHZ3IDF2dyAxMy4xNDI4NTcxNHZ3IDF2dyAxMy4xNDI4NTcxNHZ3IDF2dyAxMy4xNDI4NTcxNHZ3IDF2dyAxMy4xNDI4NTcxNHZ3IDF2dzsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMXZ3IDIwLjQ0NDE0NDM3dncgMXZ3IGNhbGMoMTAwdmggLSAyMy40NDQxNDQzN3Z3KSAxdnc7IFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogNzQxLzc0MSkge1xcclxcbiAgICAjZ2FtZUJvYXJkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygoMTAwdncgLSA5OXZoKS8yKSAxMy4xNDI4NTcxNHZoIDF2aCAxMy4xNDI4NTcxNHZoIDF2aCAxMy4xNDI4NTcxNHZoIDF2aCAxMy4xNDI4NTcxNHZoIDF2dyAxMy4xNDI4NTcxNHZoIDF2dyAxMy4xNDI4NTcxNHZoIDF2aCAxMy4xNDI4NTcxNHZoIGNhbGMoKDEwMHZ3IC0gOTl2aCkvMik7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDF2aCAyMC40NDQxNDQzN3ZoIDF2aCBjYWxjKDEwMHZ3IC0gMjMuNDQ0MTQ0Mzd2aCkgMXZoO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2dhbWVNZW51IHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVNZW51U2NyZWVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWVudW9wZW4ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbWVudS1vcGVuO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWNsb3NlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbm9wZW4ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogc2NyZWVuLW9wZW47XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW5jbG9zZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbWVudS1vcGVuIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2NyZWVuLW9wZW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5NZW51QnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLk1lbnVCdXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43MCk7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9wUGlsZSB7XFxyXFxuICAgIGhlaWdodDogMjAuNDQ0MTQ0Mzd2dztcXHJcXG4gICAgd2lkdGg6IDEzLjE0Mjg1NzE0dnc7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XFxyXFxufVxcclxcblxcclxcbi50b3BQaWxlIGRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0b2NrIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbiN0YWxvbiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiA0O1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhZGUge1xcclxcbiAgICBncmlkLWNvbHVtbjogODtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYXJ0IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4jY2x1YiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxMjtcXHJcXG59XFxyXFxuXFxyXFxuI2RpYW1vbmQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMTQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiA3NDEgLyA3NDEpe1xcclxcbiAgICAudG9wUGlsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwLjQ0NDE0NDM3dmg7XFxyXFxuICAgICAgICB3aWR0aDogMTMuMTQyODU3MTR2aDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNxdWlja1NvbHZlIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDEwdnc7XFxyXFxuICAgIHdpZHRoOiAxM3Z3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogNjtcXHJcXG4gICAgZm9udC1zaXplOiAzdnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAuNXZ3IDAuNXZ3IGJsYWNrO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1dnc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3F1aWNrU29sdmU6YWN0aXZlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNS41dnc7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjV2dztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiA3NDEgLyA3NDEpe1xcclxcbiAgICAjcXVpY2tTb2x2ZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDN2aDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAuNXZoIDAuNXZoIGJsYWNrO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDEzdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3F1aWNrU29sdmU6YWN0aXZlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDUuNXZoO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXZoO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI3RhYmxlYXUxIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbiN0YWJsZWF1MiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiA0OyBcXHJcXG59XFxyXFxuXFxyXFxuI3RhYmxlYXUzIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDY7XFxyXFxufVxcclxcblxcclxcbiN0YWJsZWF1NCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiA4OyAgXFxyXFxufVxcclxcblxcclxcbiN0YWJsZWF1NSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI3RhYmxlYXU2IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFibGVhdTcge1xcclxcbiAgICBncmlkLWNvbHVtbjogMTQ7XFxyXFxufVxcclxcblxcclxcbi50YWJsZWF1IHtcXHJcXG4gICAgd2lkdGg6IDEzLjE0Mjg1NzE0dnc7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgyMy40NDQxNDQzN3Z3KSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcXHJcXG4gICAgZ3JpZC1yb3c6IDQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiA3NDEgLyA3NDEpe1xcclxcblxcclxcbiAgICAudGFibGVhdSB7XFxyXFxuICAgICAgICB3aWR0aDogMTMuMTQyODU3MTR2aDtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgyMy40NDQxNDQzN3ZoKSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XFxyXFxuICAgICAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICAvKnBvc2l0aW9uOiBmaXhlZDsqL1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgU1RBVEUgLCBHQU1FX01FTlUgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IFRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBpZihTVEFURS5XSU5ET1cuTUVOVV9PUEVOKXtcclxuICAgICAgICBHQU1FX01FTlUub2JqZWN0LmNsYXNzTGlzdC5hZGQoJ21lbnVjbG9zZScpO1xyXG4gICAgICAgIEdBTUVfTUVOVS5vYmplY3QyLmNsYXNzTGlzdC5hZGQoJ3NjcmVlbmNsb3NlJyk7XHJcbiAgICAgICAgR0FNRV9NRU5VLm9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51b3BlbicpO1xyXG4gICAgICAgIEdBTUVfTUVOVS5vYmplY3QyLmNsYXNzTGlzdC5yZW1vdmUoJ3NjcmVlbm9wZW4nKTtcclxuICAgICAgICBTVEFURS5XSU5ET1cuTUVOVV9PUEVOID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEdBTUVfTUVOVS5vYmplY3QuY2xhc3NMaXN0LnJlbW92ZSgnbWVudWNsb3NlJyk7XHJcbiAgICAgICAgR0FNRV9NRU5VLm9iamVjdDIuY2xhc3NMaXN0LnJlbW92ZSgnc2NyZWVuY2xvc2UnKTtcclxuICAgICAgICBHQU1FX01FTlUub2JqZWN0LmNsYXNzTGlzdC5hZGQoJ21lbnVvcGVuJyk7XHJcbiAgICAgICAgR0FNRV9NRU5VLm9iamVjdDIuY2xhc3NMaXN0LmFkZCgnc2NyZWVub3BlbicpO1xyXG4gICAgICAgIFNUQVRFLldJTkRPVy5NRU5VX09QRU4gPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBVbmRvID0gKCkgPT4ge1xyXG4gICAgaWYgKFNUQVRFLkdBTUUuTU9WRV9ISVNUT1JZLmxlbmd0aCl7XHJcbiAgICAgICAgbGV0IG1vdmUgPSBTVEFURS5HQU1FLk1PVkVfSElTVE9SWS5wb3AoKTtcclxuICAgICAgICBtb3ZlLnJldmVyc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgQWN0aW9uID0ge1xyXG4gICAgVG9nZ2xlTWVudTogVG9nZ2xlTWVudSxcclxuICAgIFVuZG86IFVuZG9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DYXJkLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQge1RvU3ltYm9sLCBUb0ZhY2VWYWx1ZX0gZnJvbSAnLi4vQ29udmVyc2lvbi9Db252ZXJzaW9uJztcclxuaW1wb3J0IHtDQVJEX01PVVNFX0RPV059IGZyb20gJy4uL0dsb2JhbHMvR2xvYmFscyc7XHJcbmltcG9ydCAnLi9DYXJkLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKHNldCwgc3VpdGUsIHZhbHVlLCBwYXJlbnQsIGZhY2Upe1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAoc3VpdGUgPT09ICdIJyB8fCBzdWl0ZSA9PT0gJ0QnKT8ncmVkJzonYmxhY2snO1xyXG4gICAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XHJcbiAgICAgICAgdGhpcy5zdWl0ZSA9IHN1aXRlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldCA9IHNldDtcclxuICAgICAgICB0aGlzLnZhbHVlU3ltYm9sID0gVG9GYWNlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3VpdGVTeW1ib2wgPSBUb1N5bWJvbChzdWl0ZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gc2V0K3N1aXRlK3ZhbHVlO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UE9TID0gW107XHJcbiAgICAgICAgdGhpcy56SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY2xpY2tFdmVudHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwibW91c2Vkb3duXCIsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IENBUkRfTU9VU0VfRE9XTlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLmNzc0NsYXNzZXMgPSBbXHJcbiAgICAgICAgICAgICdjYXJkJ1xyXG4gICAgICAgIF1cclxuICAgICAgICB0aGlzLmFkZENsYXNzID0gdGhpcy5hZGRDbGFzcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QgPSB0aGlzLmRlc3RydWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gdGhpcy5kcmFnLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5mbGlwID0gdGhpcy5mbGlwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRGYWNlID0gdGhpcy5nZXRGYWNlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRUb3AgPSB0aGlzLmdldFRvcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0TGVmdCA9IHRoaXMuZ2V0TGVmdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFdpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MgPSB0aGlzLnJlbW92ZUNsYXNzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0VG9wID0gdGhpcy5zZXRUb3AuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldExlZnQgPSB0aGlzLnNldExlZnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldFpJbmRleCA9IHRoaXMuc2V0WkluZGV4LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDbGFzcyhhKSB7dGhpcy5lbGVtZW50KCkuY2xhc3NMaXN0LmFkZChhKX1cclxuXHJcbiAgICBkcmFnKG1hcmdpbikge1xyXG4gICAgICAgIC8vQWRqdXN0IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5zZXRMZWZ0KHRoaXMuZHJhZ1N0YXJ0UE9TWzBdK21hcmdpblswXSk7XHJcbiAgICAgICAgdGhpcy5zZXRUb3AodGhpcy5kcmFnU3RhcnRQT1NbMV0rbWFyZ2luWzFdKTtcclxuXHJcbiAgICAgICAgLy9TaGFkZSB0aGUgY2FyZFxyXG4gICAgICAgIHRoaXMuZWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoJ3NoYWRlJyk7XHJcblxyXG4gICAgICAgIC8vQWRqdXN0IFpJbmRleFxyXG4gICAgICAgIHRoaXMuZWxlbWVudCgpLnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4ICsgMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3AoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cnVjdCgpe1xyXG4gICAgICAgIHRoaXMuY2xpY2tFdmVudHMuZm9yRWFjaChpdGVtID0+IHRoaXMuZWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoaXRlbS50cmlnZ2VyLCBpdGVtLmFjdGlvbikpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCgpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcCgpIHtcclxuICAgICAgICAvL0NoYW5nZSB0aGUgdmFsdWVcclxuICAgICAgICBpZighdGhpcy5mYWNlKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygnY2FyZEJhY2snKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygnY2FyZEZyb250Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygnY2FyZEJhY2snKTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygnY2FyZEZyb250Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGYWNlKCkge3JldHVybiB0aGlzLmZhY2V9O1xyXG4gICAgZ2V0VG9wKCkge3JldHVybiB0aGlzLmVsZW1lbnQoKS5vZmZzZXRUb3B9O1xyXG4gICAgZ2V0TGVmdCgpIHtyZXR1cm4gdGhpcy5lbGVtZW50KCkub2Zmc2V0TGVmdH07XHJcbiAgICBnZXRIZWlnaHQoKSB7cmV0dXJuIHRoaXMuZWxlbWVudCgpLm9mZnNldEhlaWdodH07XHJcbiAgICBnZXRXaWR0aCgpIHtyZXR1cm4gdGhpcy5lbGVtZW50KCkub2Zmc2V0V2lkdGh9O1xyXG5cclxuICAgIHJlbW92ZUNsYXNzKGEpIHt0aGlzLmVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKGEpfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkVG9wTGVmdFwiPiR7dGhpcy52YWx1ZVN5bWJvbH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkVG9wUmlnaHRcIj4ke3RoaXMuc3VpdGVTeW1ib2x9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY2FyZE1pZGRsZVwiPiR7dGhpcy5zdWl0ZVN5bWJvbH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkQm90dG9tTGVmdFwiPiR7dGhpcy5zdWl0ZVN5bWJvbH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkQm90dG9tUmlnaHRcIj4ke3RoaXMudmFsdWVTeW1ib2x9PC9oMz5gOyAgICAgICAgICAgXHJcbiAgICAgICAgbWUuY2xhc3NMaXN0LmFkZCh0aGlzLnN1aXRlKTtcclxuICAgICAgICBpZih0aGlzLmZhY2UpIHtcclxuICAgICAgICAgICAgbWUuY2xhc3NMaXN0LmFkZCgnY2FyZEZyb250Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWUuY2xhc3NMaXN0LmFkZChcImNhcmRCYWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNzc0NsYXNzZXMuZm9yRWFjaChpdGVtID0+IG1lLmNsYXNzTGlzdC5hZGQoaXRlbSkpO1xyXG4gICAgICAgIG1lLmlkID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmVsZW1lbnQoKS5hcHBlbmRDaGlsZChtZSk7XHJcbiAgICAgICAgdGhpcy5jbGlja0V2ZW50cy5mb3JFYWNoKGl0ZW0gPT4gbWUuYWRkRXZlbnRMaXN0ZW5lcihpdGVtLnRyaWdnZXIsIGl0ZW0uYWN0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG9wKHkpIHt0aGlzLmVsZW1lbnQoKS5zdHlsZS50b3AgPSBgJHt5fXB4YH07XHJcbiAgICBzZXRMZWZ0KHgpIHt0aGlzLmVsZW1lbnQoKS5zdHlsZS5sZWZ0ID0gYCR7eH1weGB9O1xyXG4gICAgc2V0WkluZGV4KHopIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQoKS5zdHlsZS56SW5kZXggPSB6O1xyXG4gICAgICAgIHRoaXMuekluZGV4ID0gejtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBSRUZSRVNIX1NDUkVFTiB9IGZyb20gXCIuLi9HbG9iYWxzL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSB0aGlzLmZpbmlzaC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaCgpe1xyXG4gICAgICAgIGlmKFNUQVRFLkNBUkRfQUNUSU9OLkNBUkRTLmxlbmd0aCkgU1RBVEUuQ0FSRF9BQ1RJT04uQ0FSRFMuZm9yRWFjaChjcmQ9PmNyZC5kcm9wKCkpO1xyXG4gICAgICAgIFJFRlJFU0hfU0NSRUVOKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0FMTF9QSUxFU30gZnJvbSAnLi4vR2xvYmFscy9HbG9iYWxzJztcclxuaW1wb3J0IE1vdmVDYXJkIGZyb20gJy4vTW92ZUNhcmQnO1xyXG5pbXBvcnQgRmxpcENhcmQgZnJvbSAnLi9GbGlwQ2FyZCc7XHJcbmltcG9ydCBDb21iaW5lZE1vdmUgZnJvbSAnLi9Db21iaW5lZE1vdmUnO1xyXG5pbXBvcnQgU3RvY2sgZnJvbSAnLi4vU3RvY2svU3RvY2snO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IFRhYmxlYXUgZnJvbSAnLi4vVGFibGVhdS9UYWJsZWF1JztcclxuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuLi9HYW1lQm9hcmQvR2FtZUJvYXJkJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZC9DYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRBY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoZnJvbVBpbGUsIGNhcmRzLCB0b1BpbGUpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmNhcmRzID0gKGNhcmRzIGluc3RhbmNlb2YgQ2FyZCk/IFtjYXJkc10gOiBjYXJkcztcclxuICAgICAgICB0aGlzLmZyb21QaWxlID0gZnJvbVBpbGU7XHJcbiAgICAgICAgdGhpcy50b1BpbGUgPSB0b1BpbGU7XHJcbiAgICAgICAgdGhpcy5hc3Nlc3MgPSB0aGlzLmFzc2Vzcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZSA9IHRoaXMuZXhlY3V0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGlsZSA9IHRoaXMuZ2V0UGlsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXNzZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXNzZXNzKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZnJvbVBpbGUgaW5zdGFuY2VvZiBTdG9jayAmJiB0aGlzLmZyb21QaWxlLmNhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2gobmV3IEZsaXBDYXJkKHRoaXMuY2FyZHNbMF0pKTtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2gobmV3IE1vdmVDYXJkKHRoaXMuZnJvbVBpbGUsIHRoaXMuY2FyZHMsIHRoaXMudG9QaWxlKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9QaWxlLnZhbGlkYXRlTW92ZSh0aGlzLmNhcmRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChuZXcgTW92ZUNhcmQodGhpcy5mcm9tUGlsZSwgdGhpcy5jYXJkcywgdGhpcy50b1BpbGUpKTtcclxuICAgICAgICAgICAgaWYodGhpcy5mcm9tUGlsZSBpbnN0YW5jZW9mIFRhYmxlYXUgJiYgdGhpcy5mcm9tUGlsZS5jYXJkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5mcm9tUGlsZS50b3BDYXJkKCkuZmFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKG5ldyBGbGlwQ2FyZCh0aGlzLmZyb21QaWxlLnRvcENhcmQoKSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICBTVEFURS5HQU1FLk1PVkVfSElTVE9SWS5wdXNoKG5ldyBDb21iaW5lZE1vdmUodGhpcy5hY3Rpb25zKSk7XHJcbiAgICAgICAgLy9TVEFURS5HQU1FX1dJTl9ERVRFQ1RFRCA9IHRydWU7ICAvL0NvbmRpdGlvbiB1c2VkIGZvciB0ZXN0aW5nXHJcbiAgICAgICAgaWYoU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maW5kKHBpbGU9PnBpbGUgaW5zdGFuY2VvZiBHYW1lQm9hcmQpLmRldGVjdFdpbigpKSBTVEFURS5HQU1FLldJTl9ERVRFQ1RFRCA9IHRydWU7XHJcbiAgICAgICAgLy9GSVggTUVcclxuICAgICAgICAvL0Zyb20gaGVyZSB3ZSBjYW4gY2FsbCB0aGUgZnVuY3Rpb24gdG8gc2VuZCBzb2x2ZWQgZGVjayBzdHJpbmcgdG8gc2VydmVyXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGlsZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIEFMTF9QSUxFUygpLmZpbmQocGlsZSA9PiBuYW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZE1vdmUgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlKCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IGFjdGlvbi5yZXZlcnNlKCkpO1xyXG4gICAgICAgIHRoaXMuZmluaXNoKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcENhcmQgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhcmQpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jYXJkID0gY2FyZDtcclxuICAgICAgICB0aGlzLmV4ZWN1dGUgPSB0aGlzLmV4ZWN1dGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJldmVyc2UgPSB0aGlzLnJldmVyc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmV4ZWN1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCl7XHJcbiAgICAgICAgdGhpcy5jYXJkLmZsaXAoKTtcclxuICAgICAgICB0aGlzLmZpbmlzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UoKXtcclxuICAgICAgICB0aGlzLmNhcmQuZmxpcCgpO1xyXG4gICAgICAgIHRoaXMuZmluaXNoKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZUNhcmQgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZyb21QaWxlLCBjYXJkcywgdG9QaWxlKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZnJvbVBpbGUgPSBmcm9tUGlsZTtcclxuICAgICAgICB0aGlzLnRvUGlsZSA9IHRvUGlsZTtcclxuICAgICAgICB0aGlzLmNhcmRzID0gY2FyZHM7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlID0gdGhpcy5leGVjdXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gdGhpcy5yZXZlcnNlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpe1xyXG4gICAgICAgIHRoaXMudG9QaWxlLmFkZENhcmRzKHRoaXMuZnJvbVBpbGUucmVtb3ZlQ2FyZHModGhpcy5jYXJkcykpO1xyXG4gICAgICAgIHRoaXMuZmluaXNoKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldmVyc2UoKXtcclxuICAgICAgICAvL1BhcnQgb2YgdGhlIHVuZG8gZmVhdHVyZSwgd2lsbCB1bmRvIHRoZSBhY3Rpb24uXHJcbiAgICAgICAgdGhpcy5mcm9tUGlsZS5hZGRDYXJkcyh0aGlzLnRvUGlsZS5yZW1vdmVDYXJkcyh0aGlzLmNhcmRzKSk7XHJcbiAgICAgICAgdGhpcy5maW5pc2goKTtcclxuICAgIH1cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DbG9zZUJ1dHRvbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuLi9DbG9zZUJ1dHRvbi9DbG9zZUJ1dHRvbi5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoYWN0aW9uKXtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICB0aGlzLm9iamVjdDtcclxuICAgICAgICB0aGlzLmJ1aWxkID0gdGhpcy5idWlsZC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCl7XHJcbiAgICAgICAgdGhpcy5vYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLm9iamVjdC5jbGFzc0xpc3QuYWRkKCdDbG9zZUJ1dHRvbicpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSBgPGgxPng8L2gxPmA7XHJcbiAgICAgICAgdGhpcy5vYmplY3QuaW5uZXJIVE1MID0gYnV0dG9uO1xyXG4gICAgICAgIHRoaXMub2JqZWN0Lm9uY2xpY2sgPSB0aGlzLmFjdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0KCl7XHJcbiAgICAgICAgdGhpcy5vYmplY3Q7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBBbHBoYVNjYWxlID0gW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxuY29uc3QgQ2FyZFN5bWJvbHMgPSBbXCJBXCIsICAyLCAgMywgIDQsICA1LCAgNiwgIDcsICA4LCAgOSwgMTAsXCJKXCIsXCJRXCIsXCJLXCJdO1xyXG5jb25zdCBDYXJkVmFsdWVzID0gW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiXTtcclxuY29uc3QgU3VpdGVTY2FsZSA9IFtcIlNcIixcIkNcIixcIkhcIixcIkRcIixcIuKZoFwiLFwi4pmjXCIsXCLimaVcIixcIuKZplwiXTtcclxuXHJcbmNvbnN0IEZyb21BbHBoYSA9ICh2YWx1ZSkgPT4gQWxwaGFTY2FsZS5pbmRleE9mKHZhbHVlKTtcclxuXHJcbmNvbnN0IFRvQWxwaGEgPSAodmFsdWUpID0+IEFscGhhU2NhbGVbdmFsdWVdO1xyXG5cclxuY29uc3QgRnJvbUZhY2VWYWx1ZSA9ICh2YWx1ZSkgPT4gQ2FyZFZhbHVlc1tDYXJkU3ltYm9scy5pbmRleE9mKHZhbHVlKV07XHJcblxyXG5jb25zdCBUb0ZhY2VWYWx1ZSA9ICh2YWx1ZSkgPT4gQ2FyZFN5bWJvbHNbQ2FyZFZhbHVlcy5pbmRleE9mKHZhbHVlKV07XHJcblxyXG5jb25zdCBUb1N5bWJvbCA9ICh2YWx1ZSkgPT4gU3VpdGVTY2FsZVtTdWl0ZVNjYWxlLmluZGV4T2YodmFsdWUpKzRdO1xyXG5cclxuY29uc3QgRnJvbVN5bWJvbCA9ICh2YWx1ZSkgPT4gU3VpdGVTY2FsZVtTdWl0ZVNjYWxlLmluZGV4T2YodmFsdWUpLTRdO1xyXG5cclxuY29uc3QgU3VpdGVWYWx1ZXMgPSAoKSA9PiBTdWl0ZVNjYWxlLnNsaWNlKDAsNCk7XHJcblxyXG5jb25zdCBTdWl0ZVN5bWJvbHMgPSAoKSA9PiBTdWl0ZVNjYWxlLnNsaWNlKDQsOCk7XHJcblxyXG5leHBvcnQge0Zyb21BbHBoYSwgVG9BbHBoYSwgRnJvbUZhY2VWYWx1ZSwgVG9GYWNlVmFsdWUsIEZyb21TeW1ib2wsIFRvU3ltYm9sLCBDYXJkVmFsdWVzLCBTdWl0ZVZhbHVlcywgU3VpdGVTeW1ib2xzfTsiLCJpbXBvcnQge1N1aXRlVmFsdWVzLCBDYXJkVmFsdWVzfSBmcm9tICcuLi9Db252ZXJzaW9uL0NvbnZlcnNpb24nO1xyXG5pbXBvcnQgU3RvY2sgZnJvbSBcIi4uL1N0b2NrL1N0b2NrXCI7XHJcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL0dhbWVCb2FyZC9HYW1lQm9hcmRcIjtcclxuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkL0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjayB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmFuZG9tID0gdGhpcy5yYW5kb20uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJhbmRvbWl6ZUFycmF5ID0gdGhpcy5yYW5kb21pemVBcnJheS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVjb25zdGl0dXRlRGVjayA9IHRoaXMucmVjb25zdGl0dXRlRGVjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc29sdmFibGUgLSB0aGlzLnNvbHZhYmxlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc29sdmFibGUoKXtcclxuICAgICAgICBsZXQgZmFpbGVkID0gZmFsc2U7XHJcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdDtcclxuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIFwiaHR0cHM6Ly9tcmxlc2JvbWFyLmNvbS9nYW1lcy9jZ2ktYmluL2dldF9zb2x2ZWRfZGVjay5waHBcIik7XHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PntcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHhoci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KS50aGVuKHN0dWZmPT57XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY29uc3RpdHV0ZURlY2soc3R1ZmYpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIHN0YXR1cyBzY3JlZW4gYW5kIGRlYWwgcmFuZG9tIGRlY2tcclxuICAgICAgICAgICAgbGV0IG5vdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBub3RpY2UuaWQgPSAnbm90aWNlJztcclxuICAgICAgICAgICAgbm90aWNlLmlubmVySFRNTCA9IGA8aDE+VW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIHNlcnZlci4gUGxlYXNlIGNob29zZSBhIHJhbmRvbSBkZWNrLjwvaDE+YDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5hcHBlbmRDaGlsZChub3RpY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbShteVBhcmVudCwgYm9hcmQpIHtcclxuICAgICAgICBsZXQgdGVtcERlY2sgPSBbXTtcclxuICAgICAgICBTdWl0ZVZhbHVlcygpLmZvckVhY2goc3VpdGUgPT4ge1xyXG4gICAgICAgICAgICBDYXJkVmFsdWVzLmZvckVhY2gobnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHRlbXBEZWNrLnB1c2goW1wiQVwiLCBzdWl0ZSwgbnVtYmVyXSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9TaHVmZmxlIGRlY2sgYW5kIGFkZCByZXR1cm5cclxuICAgICAgICBsZXQgc2h1ZmZsZWQgPSB0aGlzLnJhbmRvbWl6ZUFycmF5KHRlbXBEZWNrKVxyXG5cclxuICAgICAgICAvL0J1aWxkIGRlY2tcclxuICAgICAgICBzaHVmZmxlZC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBteVBhcmVudC5jYXJkcy5wdXNoKG5ldyBDYXJkKGl0ZW1bMF0sIGl0ZW1bMV0sIGl0ZW1bMl0sIGJvYXJkLCBmYWxzZSkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21pemVBcnJheShteUFycmF5KSB7XHJcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKG15QXJyYXkuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG15QXJyYXkubGVuZ3RoKSwxKVswXSk7XHJcbiAgICAgICAgfSB3aGlsZSAobXlBcnJheS5sZW5ndGggPiAwKTtcclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb25zdGl0dXRlRGVjayhkZWNrU3RyaW5nKSB7XHJcbiAgICAgICAgLy9TZXBlcmF0ZSBzdHJpbmcgaW50byBpbmRpdmlkdWFsIGNhcmQgdmFsdWVzXHJcbiAgICAgICAgbGV0IGluZGl2aWR1YWxDYXJkcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGRlY2tTdHJpbmcubGVuZ3RoOyBpKz0zKSB7XHJcbiAgICAgICAgICAgIGluZGl2aWR1YWxDYXJkcy5wdXNoKFtkZWNrU3RyaW5nW2ldLCBkZWNrU3RyaW5nW2krMV0sIGRlY2tTdHJpbmdbaSsyXV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DYXB0dXJlIHRhcmdldHMgdG8gcGFzc1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLmZpbmQoaXRlbT0+IGl0ZW0gaW5zdGFuY2VvZiBTdG9jayk7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maW5kKGl0ZW09PiBpdGVtIGluc3RhbmNlb2YgR2FtZUJvYXJkKTtcclxuXHJcbiAgICAgICAgLy9CdWlsZCBjYXJkcyBhbmQgcHVzaCBvbnRvIFN0b2NrXHJcbiAgICAgICAgaW5kaXZpZHVhbENhcmRzLmZvckVhY2goY3JkID0+IHtcclxuICAgICAgICAgICAgcGFyZW50LmNhcmRzLnB1c2gobmV3IENhcmQoY3JkWzBdLCBjcmRbMV0sIGNyZFsyXSwgYm9hcmQsIGZhbHNlKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59ICAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvdW5kYXRpb24uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IFBpbGUgZnJvbSAnLi4vUGlsZS9QaWxlJztcclxuaW1wb3J0IHtUb1N5bWJvbH0gZnJvbSAnLi4vQ29udmVyc2lvbi9Db252ZXJzaW9uJztcclxuaW1wb3J0IHtGcm9tQWxwaGF9IGZyb20gJy4uL0NvbnZlcnNpb24vQ29udmVyc2lvbic7XHJcbmltcG9ydCAnLi9Gb3VuZGF0aW9uLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3VuZGF0aW9uIGV4dGVuZHMgUGlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIG5hbWUsIHN1aXRlKXtcclxuICAgICAgICBzdXBlcihwYXJlbnQsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMuY3NzQ2xhc3NlcyA9IFtcImZvdW5kYXRpb25cIiwgXCJ0b3BQaWxlXCJdO1xyXG4gICAgICAgIHRoaXMuc3VpdGUgPSBzdWl0ZTtcclxuICAgICAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZU1vdmUgPSB0aGlzLnZhbGlkYXRlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgbWUuaWQgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgbWUuc3R5bGUuekluZGV4ID0gMDtcclxuICAgICAgICBtZS5zdHlsZS5jb2xvciA9ICh0aGlzLnN1aXRlID09IFwiU1wiIHx8IHRoaXMuc3VpdGUgPT0gXCJDXCIpPyBcImJsYWNrXCIgOiBcInJlZFwiIDtcclxuICAgICAgICBtZS5pbm5lclRleHQgPSBUb1N5bWJvbCh0aGlzLnN1aXRlKTtcclxuICAgICAgICB0aGlzLmNzc0NsYXNzZXMuZm9yRWFjaChpdGVtID0+IG1lLmNsYXNzTGlzdC5hZGQoaXRlbSkpO1xyXG4gICAgICAgIG1lLmNsYXNzTGlzdC5hZGQoXCJzeW1ib2xcIik7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuZWxlbWVudCgpLmFwcGVuZENoaWxkKG1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZU1vdmUoYUNhcmQpIHtcclxuICAgICAgICBsZXQgdGVtcENhcmQgPSAoYUNhcmQgaW5zdGFuY2VvZiBDYXJkKT8gW2FDYXJkXSA6IGFDYXJkO1xyXG4gICAgICAgIGlmKHRlbXBDYXJkLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGlmKCEhdGhpcy5jYXJkQ291bnQoKSAmJiB0ZW1wQ2FyZFswXS5zdWl0ZSA9PT0gdGhpcy5zdWl0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKEZyb21BbHBoYSh0aGlzLnRvcENhcmQoKS52YWx1ZSkgPT09IEZyb21BbHBoYSh0ZW1wQ2FyZFswXS52YWx1ZSktMSk/IHRydWU6IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGVtcENhcmRbMF0udmFsdWUgPT09ICdBJyAmJiB0ZW1wQ2FyZFswXS5zdWl0ZSA9PT0gdGhpcy5zdWl0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVCb2FyZC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuL0dhbWVCb2FyZC5jc3MnO1xyXG5pbXBvcnQgU3RvY2sgZnJvbSAnLi4vU3RvY2svU3RvY2snO1xyXG5pbXBvcnQgVGFsb24gZnJvbSAnLi4vVGFsb24vVGFsb24nO1xyXG5pbXBvcnQgRm91bmRhdGlvbiBmcm9tICcuLi9Gb3VuZGF0aW9uL0ZvdW5kYXRpb24nO1xyXG5pbXBvcnQgVGFibGVhdSBmcm9tICcuLi9UYWJsZWF1L1RhYmxlYXUnO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IFF1aWNrU29sdmUgZnJvbSAnLi4vUXVpY2tTb2x2ZS9RdWlja1NvbHZlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnZ2FtZUJvYXJkJztcclxuICAgICAgICB0aGlzLmFsbFRhYmxlYXUgPSB0aGlzLmFsbFRhYmxlYXUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRldGVjdFdpbiA9IHRoaXMuZGV0ZWN0V2luLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsVGFibGVhdSgpIHtcclxuICAgICAgICByZXR1cm4gU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maWx0ZXIocGlsZSA9PiBwaWxlIGluc3RhbmNlb2YgVGFibGVhdSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0V2luKCkge1xyXG4gICAgICAgIC8vQ3ljbGVzIHRoZSBUYWJsZWF1IGFuZCBjaGVja3MgdG8gc2VlIGlmIGFueSBwaWxlcyBhcmUgdW5zb2x2ZWRcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxUYWJsZWF1KCkuZmluZChwaWxlID0+IHBpbGUuc29sdmVkKCkgPT0gZmFsc2UpPyBmYWxzZTogdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQoKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50KCkge1xyXG4gICAgICAgIC8vUmV0dXJuIHRoZSBET00gb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vR2VuZXJhdGUgdGhlIG1haW4gZ2FtZSBib2FyZCBhbmQgZ3JpZCBsYXlvdXQuXHJcbiAgICAgICAgbGV0IG1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWUuaWQgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgbWUuc3R5bGUuekluZGV4ID0gLTE7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZSk7XHJcblxyXG4gICAgICAgIC8vQWRkIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgcGlsZXMgdG8gdGhlIGdhbWUgYm9hcmQuXHJcbiAgICAgICAgU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5wdXNoKG5ldyBTdG9jayh0aGlzLCAnc3RvY2snKSk7XHJcbiAgICAgICAgU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5wdXNoKG5ldyBUYWxvbih0aGlzLCAndGFsb24nKSk7XHJcbiAgICAgICAgU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5wdXNoKG5ldyBGb3VuZGF0aW9uKHRoaXMsICdzcGFkZScsICdTJykpO1xyXG4gICAgICAgIFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUucHVzaChuZXcgRm91bmRhdGlvbih0aGlzLCAnaGVhcnQnLCAnSCcpKTtcclxuICAgICAgICBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLnB1c2gobmV3IEZvdW5kYXRpb24odGhpcywgJ2NsdWInLCAnQycpKTtcclxuICAgICAgICBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLnB1c2gobmV3IEZvdW5kYXRpb24odGhpcywgJ2RpYW1vbmQnLCAnRCcpKTtcclxuICAgICAgICBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLnB1c2gobmV3IFRhYmxlYXUodGhpcywgJ3RhYmxlYXUxJykpO1xyXG4gICAgICAgIFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUucHVzaChuZXcgVGFibGVhdSh0aGlzLCAndGFibGVhdTInKSk7XHJcbiAgICAgICAgU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5wdXNoKG5ldyBUYWJsZWF1KHRoaXMsICd0YWJsZWF1MycpKTtcclxuICAgICAgICBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLnB1c2gobmV3IFRhYmxlYXUodGhpcywgJ3RhYmxlYXU0JykpO1xyXG4gICAgICAgIFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUucHVzaChuZXcgVGFibGVhdSh0aGlzLCAndGFibGVhdTUnKSk7XHJcbiAgICAgICAgU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5wdXNoKG5ldyBUYWJsZWF1KHRoaXMsICd0YWJsZWF1NicpKTtcclxuICAgICAgICBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLnB1c2gobmV3IFRhYmxlYXUodGhpcywgJ3RhYmxlYXU3JykpO1xyXG4gICAgICAgIFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUucHVzaChuZXcgUXVpY2tTb2x2ZSh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpe31cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lTWVudS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHtHQU1FX0RFQUxfUkFORE9NLCBHQU1FX0RFQUxfU09MVkFCTEV9IGZyb20gJy4uL0dsb2JhbHMvR2xvYmFscyc7XHJcbmltcG9ydCBBY3Rpb24gZnJvbSBcIi4uL0FjdGlvbi9BY3Rpb25cIjtcclxuaW1wb3J0ICcuL0dhbWVNZW51LmNzcyc7XHJcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gJy4uL01lbnVCdXR0b24vTWVudUJ1dHRvbic7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuLi9DbG9zZUJ1dHRvbi9DbG9zZUJ1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnREb2N1bWVudCl7XHJcbiAgICAgICAgdGhpcy5wYXJlbnREb2N1bWVudCA9IHBhcmVudERvY3VtZW50O1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5vYmplY3QyO1xyXG4gICAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2ggPSB0aGlzLnJlZnJlc2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vQ3JlYXRpbmcgdGhlIG1lbnUgb2JqZWN0XHJcbiAgICAgICAgdGhpcy5vYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0LmlkID0gJ2dhbWVNZW51JztcclxuICAgICAgICB0aGlzLm9iamVjdC5jbGFzc0xpc3QuYWRkKCdtZW51b3BlbicpO1xyXG5cclxuICAgICAgICAvL0NyZWF0aW5nIHRoZSBzY3JlZW5cclxuICAgICAgICB0aGlzLm9iamVjdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0Mi5pZCA9ICdnYW1lTWVudVNjcmVlbic7XHJcbiAgICAgICAgdGhpcy5vYmplY3QyLmNsYXNzTGlzdC5hZGQoJ3NjcmVlbm9wZW4nKTtcclxuICAgICAgICB0aGlzLm9iamVjdDIub25jbGljayA9IEFjdGlvbi5Ub2dnbGVNZW51O1xyXG5cclxuICAgICAgICAvL1RoZXNlIGFyZSB0aGUgYnV0dG9uc1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1zLnB1c2gobmV3IENsb3NlQnV0dG9uKEFjdGlvbi5Ub2dnbGVNZW51KSk7XHJcbiAgICAgICAgdGhpcy5tZW51SXRlbXMucHVzaChuZXcgTWVudUJ1dHRvbignQ2xvc2UnLCBBY3Rpb24uVG9nZ2xlTWVudSkpO1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1zLnB1c2gobmV3IE1lbnVCdXR0b24oJ1VuZG8nLCBBY3Rpb24uVW5kbykpO1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1zLnB1c2gobmV3IE1lbnVCdXR0b24oJ05ldyBSYW5kb20gR2FtZScsIEdBTUVfREVBTF9SQU5ET00pKTtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtcy5wdXNoKG5ldyBNZW51QnV0dG9uKCdOZXcgU29sdmFibGUgR2FtZScsIEdBTUVfREVBTF9TT0xWQUJMRSkpO1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1zLmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5hcHBlbmRDaGlsZChpdGVtLmJ1aWxkKCkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vV3JpdGUgdGhlIG1lbnUgdG8gdGhlIGRvY3VtZW50IGJvZHlcclxuICAgICAgICB0aGlzLnBhcmVudERvY3VtZW50LmFwcGVuZENoaWxkKHRoaXMub2JqZWN0KTtcclxuICAgICAgICB0aGlzLnBhcmVudERvY3VtZW50LmFwcGVuZENoaWxkKHRoaXMub2JqZWN0Mik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpe1xyXG4gICAgICAgIC8vQWRkIHJlZnJlc2ggcHJvcGVydGllc1xyXG4gICAgICAgIHRoaXMuaGlkZVJldmVhbCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEFjdGlvbiBmcm9tIFwiLi4vQWN0aW9uL0FjdGlvblwiO1xyXG5pbXBvcnQgUGlsZSBmcm9tIFwiLi4vUGlsZS9QaWxlXCI7XHJcbmltcG9ydCBEZWNrIGZyb20gXCIuLi9EZWNrL0RlY2tcIjtcclxuaW1wb3J0IENhcmRBY3Rpb24gZnJvbSBcIi4uL0NhcmRNb3Zlcy9DYXJkQWN0aW9uXCI7XHJcbmltcG9ydCBNb3ZlQ2FyZCBmcm9tIFwiLi4vQ2FyZE1vdmVzL01vdmVDYXJkXCI7XHJcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL0dhbWVCb2FyZC9HYW1lQm9hcmRcIjtcclxuaW1wb3J0IEZvdW5kYXRpb24gZnJvbSBcIi4uL0ZvdW5kYXRpb24vRm91bmRhdGlvblwiO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgVGFibGVhdSBmcm9tIFwiLi4vVGFibGVhdS9UYWJsZWF1XCI7XHJcblxyXG5jb25zdCBBTExfUElMRVMgPSAoKSA9PiBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLmZpbHRlcihvYmogPT4gb2JqIGluc3RhbmNlb2YgUGlsZSk7XHJcblxyXG4vL0lzb2xhdGUgQ2FyZFxyXG5jb25zdCBGSU5EX0NBUkQgPSAoYSkgPT4ge1xyXG4gICAgLy9yZXR1cm4gKGEuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkJykpPyBhOiBGSU5EX0NBUkQoYS5wYXJlbnRFbGVtZW50KVxyXG4gICAgaWYoYS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQnKSkge1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gRklORF9DQVJEKGEucGFyZW50RWxlbWVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEdFVF9DQVJEX09CSkVDVCA9IChhKSA9PiB7XHJcbiAgICByZXR1cm4gQUxMX1BJTEVTKCkuZmluZChwaWxlID0+IHtcclxuICAgICAgICByZXR1cm4gcGlsZS5jYXJkcy5maW5kKGNyZCA9PiBjcmQubmFtZSA9PSBhLmlkKTtcclxuICAgIH0pLmNhcmRzLmZpbmQoY3JkID0+IGNyZC5uYW1lID09IGEuaWQpO1xyXG59XHJcblxyXG5jb25zdCBSRUZSRVNIX1NDUkVFTiA9ICgpID0+IHtcclxuICAgIC8vVGhpcyByb3V0aW5lIHdpbGwgY3ljbGUgdGhyb3VnaCBzdGF0ZSBvYmplY3RzIGFuZCByZWZyZXNoIHRoZWlyIHJlbGF0ZWQgb2JqZWN0cy5cclxuICAgIFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUuZm9yRWFjaChvYmo9Pm9iai5yZWZyZXNoKCkpO1xyXG59XHJcblxyXG5jb25zdCBDQVJEX0FVVE9fTU9WRSA9IChmcm9tUGlsZSwgdGFyZ2V0Q2FyZCwgdG9QaWxlLCBkZWFsKSA9PiB7XHJcbiAgICAvL1RoaXMgZnVuY3Rpb24gd2lsbCBtb3ZlIGEgY2FyZCBmcm9tIG9uZSBkZWNrIHRvIGFub3RoZXIgaW4gYW4gYW5pbWF0ZWQgZmFzaGlvbi5cclxuICAgIC8vRXZlbnR1YWxseSB0aGlzIHdpbGwgbmVlZCB0byBiZSBhbmltYXRlZC5cclxuICAgIC8vTkVFRFMgRklYRURcclxuXHJcbiAgICAvL0NyZWF0ZSB0aGUgbW92ZSBvYmplY3QgYW5kIGFkZCBpdCB0byB0aGUgc3RhdGUuXHJcbiAgICBsZXQgdGVtcE1vdmUgPSBuZXcgTW92ZUNhcmQoZnJvbVBpbGUsIGZyb21QaWxlLnNlbGVjdENhcmRzKHRhcmdldENhcmQpLCB0b1BpbGUpO1xyXG4gICAgaWYoZGVhbCkgU1RBVEUuR0FNRS5NT1ZFX0hJU1RPUlkucHVzaCh0ZW1wTW92ZSk7XHJcbn1cclxuXHJcbmNvbnN0IENBUkRfTU9VU0VfRE9XTiA9IChldmVudCkgPT4ge1xyXG4gICAgLy9VUERBVEUgU1RBVEVcclxuICAgIFNUQVRFLkNBUkRfTU9VU0UuRE9XTiA9IHRydWU7XHJcblxyXG4gICAgLy9DYXB0dXJlIG1vdXNlZG93biB0YXJnZXRcclxuICAgIGxldCB0YXJnZXRDYXJkID0gRklORF9DQVJEKGV2ZW50LnRhcmdldCk7XHJcblxyXG4gICAgLy9TaG9ydGN1dCBpZiBtb3VzZSBkb3duIGlzIG9uIHN0b2NrLlxyXG4gICAgaWYoRklORF9QSUxFX1VTSU5HX0NBUkRfRE9NX0VMRU1FTlQoRklORF9DQVJEKGV2ZW50LnRhcmdldCkpLm5hbWUgPT09ICdzdG9jaycpIHtcclxuICAgICAgICBTVEFURS5DQVJEX0FDVElPTi5UQVJHRVQgPSB0YXJnZXRDYXJkO1xyXG4gICAgICAgIFNUQVRFLkNBUkRfQUNUSU9OLk1PVVNFX09SSUdfUE9TID0gW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldO1xyXG4gICAgICAgIENBUkRfRFJBR19TVEFSVCgpO1xyXG4gICAgICAgIHJldHVybiBDQVJEX0RSQUdfRU5EKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Eb3VibGUgY2xpY2sgZGV0ZWN0aW9uXHJcbiAgICBpZihTVEFURS5DQVJEX0RCTF9DTElDSy5USU1FUiAmJiB0YXJnZXRDYXJkID09IFNUQVRFLkNBUkRfREJMX0NMSUNLLlRBUkdFVCl7XHJcbiAgICAgICAgU1RBVEUuQ0FSRF9BQ1RJT04uVEFSR0VUID0gU1RBVEUuQ0FSRF9EQkxfQ0xJQ0suVEFSR0VUO1xyXG4gICAgICAgIFNUQVRFLkNBUkRfREJMX0NMSUNLLlRBUkdFVCA9IGZhbHNlO1xyXG4gICAgICAgIENBUkRfRE9VQkxFX0NMSUNLKCk7XHJcbiAgICAgICAgU1RBVEUuQ0FSRF9EQkxfQ0xJQ0suU1RBVFVTID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAvL1N0YXJ0cyBkb3VibGUgY2xpY2sgdGltZXIgLSBETyBOT1QgQUxURVJcclxuICAgICAgICBTVEFURS5DQVJEX0RCTF9DTElDSy5UQVJHRVQgPSB0YXJnZXRDYXJkO1xyXG4gICAgICAgIFNUQVRFLkNBUkRfREJMX0NMSUNLLlRJTUVSID0gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoU1RBVEUuQ0FSRF9EQkxfQ0xJQ0suVElNRVIpO1xyXG4gICAgICAgICAgICBTVEFURS5DQVJEX0RCTF9DTElDSy5USU1FUiA9IGZhbHNlO1xyXG4gICAgICAgIH0sMzAwKVxyXG5cclxuICAgICAgICAvL1N0YXJ0cyBkcmFnIHRpbWVyXHJcbiAgICAgICAgU1RBVEUuQ0FSRF9EUkFHLlRBUkdFVCA9IHRhcmdldENhcmQ7XHJcbiAgICAgICAgU1RBVEUuQ0FSRF9EUkFHLlRJTUVSID0gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBpZihTVEFURS5DQVJEX01PVVNFLkRPV04pIHtcclxuICAgICAgICAgICAgICAgIFNUQVRFLkNBUkRfRFJBRy5TVEFUVVMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgU1RBVEUuQ0FSRF9BQ1RJT04uVEFSR0VUID0gU1RBVEUuQ0FSRF9EUkFHLlRBUkdFVDtcclxuICAgICAgICAgICAgICAgIFNUQVRFLkNBUkRfRFJBRy5UQVJHRVQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIENBUkRfRFJBR19TVEFSVCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgU1RBVEUuQ0FSRF9EUkFHLlRBUkdFVCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChTVEFURS5DQVJEX0RSQUcuVElNRVIpO1xyXG4gICAgICAgICAgICBTVEFURS5DQVJEX0RSQUcuVElNRVIgPSBmYWxzZTtcclxuICAgICAgICB9LCAxNTApXHJcblxyXG4gICAgICAgIFNUQVRFLkNBUkRfQUNUSU9OLk1PVVNFX09SSUdfUE9TID0gW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDQVJEX0RSQUdfU1RBUlQgPSAoKSA9PiB7XHJcbiAgICAvL05ldyBNZXRob2RcclxuICAgIFNUQVRFLkNBUkRfQUNUSU9OLkZST01fUElMRSA9IEZJTkRfUElMRV9VU0lOR19DQVJEX0RPTV9FTEVNRU5UKCBTVEFURS5DQVJEX0FDVElPTi5UQVJHRVQgKTsgLy9Xb3Jrc1xyXG4gICAgXHJcbiAgICAvL0dyYWIgYWRkaXRpb25hbCBjYXJkc1xyXG4gICAgU1RBVEUuQ0FSRF9BQ1RJT04uQ0FSRFMgPSBTVEFURS5DQVJEX0FDVElPTi5GUk9NX1BJTEUuc2VsZWN0Q2FyZHMoIFNUQVRFLkNBUkRfQUNUSU9OLlRBUkdFVCApOyAvL1dvcmtzXHJcblxyXG4gICAgLy9TZXQgY2FyZCBkcmFnIHN0YXJ0IFBPUyBcclxuICAgIFNUQVRFLkNBUkRfQUNUSU9OLkNBUkRTLmZvckVhY2goY2FyZCA9PiBjYXJkLmRyYWdTdGFydFBPUyA9IFtjYXJkLmdldExlZnQoKSwgY2FyZC5nZXRUb3AoKV0pO1xyXG59XHJcblxyXG5jb25zdCBDQVJEX0RSQUdfRU5EID0gKCkgPT4ge1xyXG4gICAgLy9JZGVudGlmeSBkcm9wIHBpbGUgbXkgY3Vyc29yIFBPUyBvbiBtb3VzZXVwLlxyXG4gICAgU1RBVEUuQ0FSRF9BQ1RJT04uVE9fUElMRSA9IEFMTF9QSUxFUygpLmZpbmQocGlsZSA9PiBTVEFURS5XSU5ET1cuTU9VU0VfUE9TWzBdID49IHBpbGUuZ2V0TGVmdCgpICYmXHJcbiAgICBTVEFURS5XSU5ET1cuTU9VU0VfUE9TWzBdIDw9IHBpbGUuZ2V0UmlnaHQoKSAmJlxyXG4gICAgU1RBVEUuV0lORE9XLk1PVVNFX1BPU1sxXSA+PSBwaWxlLmdldFRvcCgpICYmXHJcbiAgICBTVEFURS5XSU5ET1cuTU9VU0VfUE9TWzFdIDw9IHBpbGUuZ2V0Qm90dG9tKCkpO1xyXG5cclxuICAgIGlmKFNUQVRFLkNBUkRfQUNUSU9OLkZST01fUElMRS5uYW1lID09PSBcInN0b2NrXCIpIHtcclxuICAgICAgICBTVEFURS5DQVJEX0FDVElPTi5UT19QSUxFID0gQUxMX1BJTEVTKCkuZmluZChwaWxlID0+IHBpbGUubmFtZSA9PSAndGFsb24nKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYoU1RBVEUuQ0FSRF9BQ1RJT04uVE9fUElMRSkge1xyXG4gICAgICAgIG5ldyBDYXJkQWN0aW9uKFNUQVRFLkNBUkRfQUNUSU9OLkZST01fUElMRSwgU1RBVEUuQ0FSRF9BQ1RJT04uQ0FSRFMsIFNUQVRFLkNBUkRfQUNUSU9OLlRPX1BJTEUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL0Ryb3AgYWxsIGNhcmRzXHJcbiAgICBTVEFURS5DQVJEX0FDVElPTi5DQVJEUy5mb3JFYWNoKGNyZD0+Y3JkLmRyb3AoKSk7XHJcblxyXG4gICAgLy9EZXRlcm1pbmUgaWYgcGxheWVyIGhhcyB3b25cclxuICAgIC8vRklYIE1FXHJcblxyXG4gICAgLy9DbGVhciBkcm9wIFNUQVRFXHJcbiAgICBTVEFURS5DQVJEX0FDVElPTi5DQVJEUyA9IFtdO1xyXG4gICAgU1RBVEUuQ0FSRF9BQ1RJT04uTU9VU0VfT1JJR19QT1MgPSBmYWxzZTtcclxuICAgIFNUQVRFLkNBUkRfQUNUSU9OLkZST01fUElMRSA9IGZhbHNlO1xyXG4gICAgU1RBVEUuQ0FSRF9EUkFHLlNUQVRVUyA9IGZhbHNlO1xyXG4gICAgU1RBVEUuQ0FSRF9BQ1RJT04uVE9fUElMRSA9IGZhbHNlO1xyXG4gICAgUkVGUkVTSF9TQ1JFRU4oKTtcclxufVxyXG5cclxuY29uc3QgQ0FSRF9ET1VCTEVfQ0xJQ0sgPSAoKSA9PiB7XHJcbiAgICAvL05ldyBNZXRob2RcclxuICAgIFNUQVRFLkNBUkRfQUNUSU9OLkZST01fUElMRSA9IEZJTkRfUElMRV9VU0lOR19DQVJEX0RPTV9FTEVNRU5UKCBTVEFURS5DQVJEX0FDVElPTi5UQVJHRVQgKTsgLy9Xb3Jrc1xyXG5cclxuICAgIC8vQ2FwdHVyZSBjYXJkIG9iamVjdFxyXG4gICAgU1RBVEUuQ0FSRF9BQ1RJT04uQ0FSRFMgPSBbR0VUX0NBUkRfT0JKRUNUKFNUQVRFLkNBUkRfQUNUSU9OLlRBUkdFVCldO1xyXG5cclxuICAgIC8vU2V0IGNhcmQgZHJhZyBzdGFydCBQT1MgXHJcbiAgICBTVEFURS5DQVJEX0FDVElPTi5DQVJEUy5mb3JFYWNoKGNhcmQgPT4gY2FyZC5kcmFnU3RhcnRQT1MgPSBbY2FyZC5nZXRMZWZ0KCksIGNhcmQuZ2V0VG9wKCldKTtcclxuXHJcbiAgICAvL1Nob3J0Y3V0IGlmIHRoZSBkcmFnIHBpbGUgaXMgdGhlIHN0b2NrXHJcbiAgICBpZihTVEFURS5DQVJEX0FDVElPTi5GUk9NX1BJTEUubmFtZSA9PT0gJ3N0b2NrJykge1xyXG4gICAgICAgIENBUkRfRFJBR19FTkQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9SdW4gR0FNRV9DSEVDS19DQVJEX0FHQUlOU1RfUElMRVNcclxuICAgICAgICBsZXQgdG9QaWxlcyA9IFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUuZmlsdGVyKHBpbGUgPT4gcGlsZSBpbnN0YW5jZW9mIFRhYmxlYXUgfHwgcGlsZSBpbnN0YW5jZW9mIEZvdW5kYXRpb24pLmZpbHRlcihwaWxlID0+IFNUQVRFLkNBUkRfQUNUSU9OLkZST01fUElMRSAhPSBwaWxlKTtcclxuICAgICAgICBHQU1FX0NIRUNLX0NBUkRfQUdBSU5TVF9QSUxFUyhTVEFURS5DQVJEX0FDVElPTi5GUk9NX1BJTEUsU1RBVEUuQ0FSRF9BQ1RJT04uQ0FSRFNbMF0sdG9QaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9FeGl0IGZ1bmN0aW9uXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuY29uc3QgRklORF9QSUxFX1VTSU5HX0NBUkRfRE9NX0VMRU1FTlQgPSAoY2FyZEVsZW1lbnQpID0+IHtcclxuICAgIC8vVGFrZSBjYXJkRWxlbWVudCBhbmQgY3ljbGUgdGhyb3VnaCBTVEFURS5HQU1FLk9CSkVDVF9UUkVFIHRvIGlkZW50aWZ5IGFuZCByZXR1cm4gcGlsZSBjb250YWluaW5nIGNhcmQuXHJcbiAgICByZXR1cm4gQUxMX1BJTEVTKCkuZmluZChwaWxlID0+IHBpbGUuaGFzQ2FyZChjYXJkRWxlbWVudC5pZCkpO1xyXG59XHJcblxyXG5jb25zdCBHQU1FX0NBUkRTX1JFTUFJTiA9ICgpID0+IHtcclxuICAgIGxldCBhY3RpdmVQaWxlcyA9IFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUuZmlsdGVyKHBpbGUgPT4gIShwaWxlIGluc3RhbmNlb2YgRm91bmRhdGlvbikgJiYgKHBpbGUgaW5zdGFuY2VvZiBQaWxlKSk7XHJcbiAgICBsZXQgcGlsZXNXaXRoQ2FyZHMgPSBhY3RpdmVQaWxlcy5maWx0ZXIocGlsZSA9PiBwaWxlLmNhcmRzLmxlbmd0aCA+IDApO1xyXG4gICAgcmV0dXJuIChwaWxlc1dpdGhDYXJkcy5sZW5ndGgpPyB0cnVlOiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgR0FNRV9DSEVDS19DQVJEX0FHQUlOU1RfUElMRVMgPSAoZnJvbVBpbGUsIG15Q2FyZCwgbXlQaWxlcykgPT4ge1xyXG4gICAgbGV0IG15UGlsZXNUcmltbWVkID0gbXlQaWxlcy5maWx0ZXIocGlsZT0+IHBpbGUgIT0gZnJvbVBpbGUpO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICB3aGlsZSAoZm91bmQgPT0gZmFsc2UgJiYgaSA8IG15UGlsZXNUcmltbWVkLmxlbmd0aCkge1xyXG4gICAgICAgIGlmKG15UGlsZXNUcmltbWVkW2ldLnZhbGlkYXRlTW92ZShteUNhcmQpKSB7XHJcbiAgICAgICAgICAgIC8vQ2hlY2sgZnJvbVBpbGUgYWJvdmVDYXJkVmFsdWUoKSBhZ2FpbnN0IHRvUGlsZSB0b3BDYXJkLnZhbHVlXHJcbiAgICAgICAgICAgIGxldCByZWR1bmRhbmN5Q2hlY2sgPSBmcm9tUGlsZS5hYm92ZUNhcmRWYWx1ZShteUNhcmQpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVDaGVjayA9IChteVBpbGVzVHJpbW1lZFtpXS5jYXJkQ291bnQoKSA+IDApID8gcmVkdW5kYW5jeUNoZWNrICE9IG15UGlsZXNUcmltbWVkW2ldLnRvcENhcmQoKS52YWx1ZSA6IHRydWU7XHJcbiAgICAgICAgICAgIGlmKHJlZHVuZGFuY3lDaGVjayA9PSBmYWxzZSB8fCB2YWx1ZUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICBTVEFURS5DQVJEX0FDVElPTi5UT19QSUxFID0gbXlQaWxlc1RyaW1tZWRbaV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRklYIE1FIC0gVGVzdCBDYXJkIEFjdGlvbiAtIE5vdCBXb3JraW5nXHJcbiAgICAgICAgICAgICAgICBuZXcgQ2FyZEFjdGlvbihTVEFURS5DQVJEX0FDVElPTi5GUk9NX1BJTEUsIFNUQVRFLkNBUkRfQUNUSU9OLkNBUkRTLCBTVEFURS5DQVJEX0FDVElPTi5UT19QSUxFKTtcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbn1cclxuXHJcbmNvbnN0IEdBTUVfRkFDRURPV05fQ0FSRFNfUkVNQUlOID0gKCkgPT4ge1xyXG4gICAgbGV0IGFjdGl2ZVBpbGVzID0gU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maWx0ZXIocGlsZSA9PiAhKHBpbGUgaW5zdGFuY2VvZiBGb3VuZGF0aW9uKSAmJiAocGlsZSBpbnN0YW5jZW9mIFBpbGUpKTtcclxuICAgIGxldCBwaWxlc1dpdGhDYXJkcyA9IGFjdGl2ZVBpbGVzLmZpbHRlcihwaWxlID0+IHBpbGUubm9uRmFjZUNhcmRzKCkpO1xyXG4gICAgcmV0dXJuIChwaWxlc1dpdGhDYXJkcy5sZW5ndGgpPyB0cnVlOiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgR0FNRV9ERUFMID0gKCkgPT4ge1xyXG4gICAgLy9UaGlzIGZ1bmN0aW9uIG1vdmVzIHRoZSBjYXJkIGZyb20gc3RvY2sgdG8gdGhlIHRhYmxlYXUgcGlsZXMuXHJcbiAgICBsZXQgZnJvbVBpbGUgPSBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLmZpbmQocGlsZSA9PiBwaWxlLm5hbWUgPT0gJ3N0b2NrJyk7XHJcblxyXG4gICAgLy9EZWFsIG9yZGVyXHJcbiAgICBsZXQgZGVhbE9yZGVyID0gW1xyXG4gICAgICAgIFsndGFibGVhdTEnLHRydWVdLFsndGFibGVhdTInLGZhbHNlXSxbJ3RhYmxlYXUzJyxmYWxzZV0sWyd0YWJsZWF1NCcsZmFsc2VdLFsndGFibGVhdTUnLGZhbHNlXSxbJ3RhYmxlYXU2JyxmYWxzZV0sWyd0YWJsZWF1NycsZmFsc2VdLFxyXG4gICAgICAgIFsndGFibGVhdTInLHRydWVdLFsndGFibGVhdTMnLGZhbHNlXSxbJ3RhYmxlYXU0JyxmYWxzZV0sWyd0YWJsZWF1NScsZmFsc2VdLFsndGFibGVhdTYnLGZhbHNlXSxbJ3RhYmxlYXU3JyxmYWxzZV0sXHJcbiAgICAgICAgWyd0YWJsZWF1MycsdHJ1ZV0sWyd0YWJsZWF1NCcsZmFsc2VdLFsndGFibGVhdTUnLGZhbHNlXSxbJ3RhYmxlYXU2JyxmYWxzZV0sWyd0YWJsZWF1NycsZmFsc2VdLFxyXG4gICAgICAgIFsndGFibGVhdTQnLHRydWVdLFsndGFibGVhdTUnLGZhbHNlXSxbJ3RhYmxlYXU2JyxmYWxzZV0sWyd0YWJsZWF1NycsZmFsc2VdLFxyXG4gICAgICAgIFsndGFibGVhdTUnLHRydWVdLFsndGFibGVhdTYnLGZhbHNlXSxbJ3RhYmxlYXU3JyxmYWxzZV0sXHJcbiAgICAgICAgWyd0YWJsZWF1NicsdHJ1ZV0sWyd0YWJsZWF1NycsZmFsc2VdLFxyXG4gICAgICAgIFsndGFibGVhdTcnLHRydWVdXHJcbiAgICBdO1xyXG5cclxuICAgIC8vSXRlcmF0ZSB0aHJvdWdoIHRoZSBkZWFsIG9yZGVyIGFuZCBwZXJmb3JtIHRoZSBjYXJkIG1vdmVzLlxyXG4gICAgZGVhbE9yZGVyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IGNhcmRBcnJheSA9IFtmcm9tUGlsZS50b3BDYXJkKCldO1xyXG4gICAgICAgIGxldCB0b1BpbGUgPSBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLmZpbmQocGlsZSA9PiBwaWxlLm5hbWUgPT0gaXRlbVswXSk7XHJcbiAgICAgICAgaWYoaXRlbVsxXSkgY2FyZEFycmF5WzBdLmZsaXAoKTtcclxuICAgICAgICBDQVJEX0FVVE9fTU9WRShmcm9tUGlsZSwgY2FyZEFycmF5LCB0b1BpbGUsIGZhbHNlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBHQU1FX0RFQUxfUkFORE9NID0gKCkgPT4ge1xyXG4gICAgLy9OZXcgZ2FtZVxyXG4gICAgR0FNRV9ORVdfR0FNRSgpO1xyXG5cclxuICAgIC8vR2VuZXJhdGVzIGEgcmFuZG9tIGRlY2sgYW5kIHBsYWNlcyBpdCBpbnRvIHRoZSBzdG9jay5cclxuICAgIGxldCB0YXJnZXQgPSBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLmZpbmQoaXRlbT0+IGl0ZW0ubmFtZSA9PT0gJ3N0b2NrJyk7XHJcbiAgICBsZXQgbXlEZWNrID0gbmV3IERlY2s7XHJcbiAgICBsZXQgbXlHYW1lID0gU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maW5kKGl0ZW09PiBpdGVtLm5hbWUgPT0gJ2dhbWVCb2FyZCcpO1xyXG4gICAgbXlEZWNrLnJhbmRvbSh0YXJnZXQsIG15R2FtZSk7XHJcblxyXG4gICAgLy9DcmVhdGUgZGVjayBzdHJpbmdcclxuICAgIGxldCBkZWNrU3RyaW5nID0gJyc7XHJcbiAgICB0YXJnZXQuY2FyZHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBkZWNrU3RyaW5nICs9IGl0ZW0ubmFtZTtcclxuICAgIH0pXHJcbiAgICBTVEFURS5HQU1FLkRFQ0tfU1RSSU5HID0gZGVja1N0cmluZztcclxuICAgIEdBTUVfREVBTCgpO1xyXG59XHJcblxyXG5jb25zdCBHQU1FX0RFQUxfU09MVkFCTEUgPSAoKSA9PiB7XHJcbiAgICAvL05ldyBHYW1lXHJcbiAgICBHQU1FX05FV19HQU1FKCk7XHJcblxyXG4gICAgLy9Tb2x2YWJsZSBTdHJpbmdcclxuICAgIFNUQVRFLkdBTUUuREVDS19TVFJJTkcgPSBcIkFESkFDQkFTTEFETEFDSkFDQUFDS0FEQ0FTRkFISEFISkFER0FEQUFTQUFTTUFERUFEREFDREFIQkFITUFISUFIQ0FIRkFTSUFDRUFES0FDSUFDTUFIQUFETUFTQ0FIREFTQkFESEFDRkFIRUFDR0FEQkFTS0FTREFTSEFIS0FDQ0FIR0FDSEFTR0FESUFERkFTSkFITEFTRUFDTFwiO1xyXG5cclxuICAgIC8vQnVpbGQgRGVja1xyXG4gICAgbGV0IG15RGVjayA9IG5ldyBEZWNrO1xyXG4gICAgbXlEZWNrLnJlY29uc3RpdHV0ZURlY2soU1RBVEUuR0FNRS5ERUNLX1NUUklORyk7XHJcblxyXG4gICAgLy9EZWFsIHRoZSBjYXJkc1xyXG4gICAgR0FNRV9ERUFMKCk7XHJcbiAgICBBY3Rpb24uVG9nZ2xlTWVudSgpO1xyXG59XHJcblxyXG5jb25zdCBHQU1FX05FV19HQU1FID0gKCkgPT4ge1xyXG4gICAgLy9DcmVhdGUgbmV3IG9iamVjdCB0cmVlXHJcbiAgICBTVEFURS5yZXNldCgpO1xyXG5cclxuICAgIC8vQnVpbGQgbmV3IEdhbWVCb2FyZFxyXG4gICAgU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5wdXNoKG5ldyBHYW1lQm9hcmQpO1xyXG59XHJcblxyXG5jb25zdCBERVRFQ1RfTU9CSUxFX1VTRVIgPSAoKSA9PiB7XHJcbiAgICBbXCJNb2JpbGVcIixcIlBob25lXCIsXCJQaXhlbFwiLFwiQW5kcm9pZFwiLFwiT3BlcmEgTWluaVwiXS5mb3JFYWNoKGRldmljZT0+IHtcclxuICAgICAgICBTVEFURS5HQU1FLk1PQklMRV9VU0VSID0gKG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoZGV2aWNlKSk/IHRydWU6IGZhbHNlO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgUElMRV9TVE9DS19DTElDSyA9ICgpID0+IHtcclxuICAgIGxldCBzdG9jayA9IEFMTF9QSUxFUygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT0gJ3N0b2NrJyk7XHJcbiAgICBsZXQgdGFsb24gPSBBTExfUElMRVMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09ICd0YWxvbicpO1xyXG5cclxuICAgIHRhbG9uLmNhcmRzLnJldmVyc2UoKTtcclxuICAgIHRhbG9uLmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgY2FyZC5mbGlwKCk7XHJcbiAgICAgICAgc3RvY2suY2FyZHMucHVzaChjYXJkKVxyXG4gICAgfSk7XHJcbiAgICB0YWxvbi5jYXJkcyA9IFtdO1xyXG5cclxuICAgIFJFRlJFU0hfU0NSRUVOKCk7XHJcbn1cclxuXHJcbmNvbnN0IFdJTkRPV19NT1VTRV9NT1ZFID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvL1VwZGF0ZSBTVEFURSB3aXRoIE1vdXNlIFBvc2l0aW9uXHJcbiAgICBTVEFURS5XSU5ET1cuTU9VU0VfUE9TID0gW2V2ZW50LmNsaWVudFgsZXZlbnQuY2xpZW50WV07XHJcbiAgICBcclxuICAgIC8vQWN0aW9uIGlmIGRyYWcgc3RhdHVzIGlzIHRydWVcclxuICAgIGlmKFNUQVRFLkNBUkRfTU9VU0UuRE9XTil7XHJcbiAgICAgICAgU1RBVEUuQ0FSRF9EUkFHLlNUQVRVUyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vU2V0IHRoZSBtYXJnaW5cclxuICAgICAgICBsZXQgbWFyZ2lucyA9IFtcclxuICAgICAgICAgICAgU1RBVEUuV0lORE9XLk1PVVNFX1BPU1swXS1TVEFURS5DQVJEX0FDVElPTi5NT1VTRV9PUklHX1BPU1swXSxcclxuICAgICAgICAgICAgU1RBVEUuV0lORE9XLk1PVVNFX1BPU1sxXS1TVEFURS5DQVJEX0FDVElPTi5NT1VTRV9PUklHX1BPU1sxXVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgLy9EcmFnIHRoZSBjYXJkc1xyXG4gICAgICAgIFNUQVRFLkNBUkRfQUNUSU9OLkNBUkRTLmZvckVhY2goY2FyZCA9PiBjYXJkLmRyYWcobWFyZ2lucykpO1xyXG4gICAgfVxyXG4gICAgLy9BY3Rpb24gaWYgZHJhZyBzdGF0dXMgaXMgZmFsc2VcclxuICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAvL0FjdGl2YXRlIG1lbnUgd2hlbiBtb3VzZW92ZXIgbGVmdCBtYXJnaW5cclxuICAgICAgICBpZighU1RBVEUuV0lORE9XLk1FTlVfT1BFTiAmJiBTVEFURS5XSU5ET1cuTU9VU0VfUE9TWzBdIDwgMjUpIHtcclxuICAgICAgICAgICAgQWN0aW9uLlRvZ2dsZU1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFdJTkRPV19NT1VTRV9VUCA9IChldmVudCkgPT4ge1xyXG4gICAgLy9VUERBVEUgU1RBVEVcclxuICAgIFNUQVRFLkNBUkRfTU9VU0UuRE9XTiA9IGZhbHNlO1xyXG4gICAgY2xlYXJUaW1lb3V0KFNUQVRFLkNBUkRfRFJBRy5USU1FUik7XHJcbiAgICBTVEFURS5DQVJEX0RSQUcuVElNRVIgPSBmYWxzZTtcclxuICAgIFNUQVRFLkNBUkRfRFJBRy5UQVJHRVQgPSBmYWxzZTtcclxuICAgIFNUQVRFLldJTkRPVy5NT1VTRV9QT1MgPSBbZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WV07XHJcblxyXG4gICAgaWYoU1RBVEUuQ0FSRF9EUkFHLlNUQVRVUyA9PSB0cnVlKXtcclxuICAgICAgICBDQVJEX0RSQUdfRU5EKGV2ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIEFMTF9QSUxFUyxcclxuICAgIENBUkRfQVVUT19NT1ZFLFxyXG4gICAgQ0FSRF9NT1VTRV9ET1dOLFxyXG4gICAgREVURUNUX01PQklMRV9VU0VSLFxyXG4gICAgR0FNRV9DQVJEU19SRU1BSU4sXHJcbiAgICBHQU1FX0NIRUNLX0NBUkRfQUdBSU5TVF9QSUxFUyxcclxuICAgIEdBTUVfREVBTF9SQU5ET00sXHJcbiAgICBHQU1FX0RFQUxfU09MVkFCTEUsXHJcbiAgICBHQU1FX0ZBQ0VET1dOX0NBUkRTX1JFTUFJTixcclxuICAgIFBJTEVfU1RPQ0tfQ0xJQ0ssXHJcbiAgICBSRUZSRVNIX1NDUkVFTixcclxuICAgIFdJTkRPV19NT1VTRV9NT1ZFLFxyXG4gICAgV0lORE9XX01PVVNFX1VQLFxyXG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZW51QnV0dG9uLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4uL01lbnVCdXR0b24vTWVudUJ1dHRvbi5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBhY3Rpb24pe1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgdGhpcy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5idWlsZCA9IHRoaXMuYnVpbGQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZCgpe1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aGlzLm9iamVjdC5jbGFzc0xpc3QuYWRkKCdNZW51QnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5vYmplY3QuaW5uZXJUZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgICAgIHRoaXMub2JqZWN0Lm9uY2xpY2sgPSB0aGlzLmFjdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0KCl7XHJcbiAgICAgICAgdGhpcy5vYmplY3Q7XHJcbiAgICB9XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgJy4vUGlsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY3NzQ2xhc3NlcyA9IFsndG9wUGlsZSddO1xyXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuICAgICAgICB0aGlzLmFib3ZlQ2FyZFZhbHVlID0gdGhpcy5hYm92ZUNhcmRWYWx1ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2FyZHMgPSB0aGlzLmFkZENhcmRzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYXJkQ291bnQgPSB0aGlzLmNhcmRDb3VudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QgPSB0aGlzLmRlc3RydWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5mYWNlQ2FyZHMgPSB0aGlzLmZhY2VDYXJkcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0Qm90dG9tID0gdGhpcy5nZXRCb3R0b20uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldEhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRMZWZ0ID0gdGhpcy5nZXRMZWZ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRSaWdodCA9IHRoaXMuZ2V0UmlnaHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFRvcCA9IHRoaXMuZ2V0VG9wLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhc0NhcmQgPSB0aGlzLmhhc0NhcmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm5vbkZhY2VDYXJkcyA9IHRoaXMubm9uRmFjZUNhcmRzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoID0gdGhpcy5yZWZyZXNoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVDYXJkcyA9IHRoaXMucmVtb3ZlQ2FyZHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdENhcmRzID0gdGhpcy5zZWxlY3RDYXJkcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9wQ2FyZCA9IHRoaXMudG9wQ2FyZC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFib3ZlQ2FyZFZhbHVlKG15Q2FyZCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5jYXJkcy5pbmRleE9mKG15Q2FyZCk7XHJcbiAgICAgICAgcmV0dXJuIChpID4gMCkgPyB0aGlzLmNhcmRzW2ktMV0udmFsdWUgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkQ2FyZHMoY2FyZHMpIHtcclxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge3RoaXMuY2FyZHMucHVzaChjYXJkKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJ1Y3QoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKGNyZCA9PiBjcmQuZGVzdHJ1Y3QoKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50KCkucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWNlQ2FyZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNhcmRDb3VudCgpID4gMCkgPyB0aGlzLmNhcmRzLmZpbHRlcihjcmQgPT4gY3JkLmZhY2UgPT0gdHJ1ZSkgOiBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm90dG9tKCkge3JldHVybiB0aGlzLmdldFRvcCgpICsgdGhpcy5lbGVtZW50KCkub2Zmc2V0SGVpZ2h0fTtcclxuICAgIGdldEhlaWdodCgpIHtyZXR1cm4gdGhpcy5lbGVtZW50KCkub2Zmc2V0SGVpZ2h0fTtcclxuICAgIGdldExlZnQoKSB7cmV0dXJuIHRoaXMuZWxlbWVudCgpLm9mZnNldExlZnR9O1xyXG4gICAgZ2V0UmlnaHQoKSB7cmV0dXJuIHRoaXMuZ2V0TGVmdCgpICsgdGhpcy5lbGVtZW50KCkub2Zmc2V0V2lkdGh9O1xyXG4gICAgZ2V0VG9wKCkge3JldHVybiB0aGlzLmVsZW1lbnQoKS5vZmZzZXRUb3B9O1xyXG4gICAgZ2V0V2lkdGgoKSB7cmV0dXJuIHRoaXMuZWxlbWVudCgpLm9mZnNldFdpZHRofTtcclxuXHJcbiAgICBoYXNDYXJkKGNhcmROYW1lKSB7cmV0dXJuICh0aGlzLmNhcmRzLmZpbmQoY3JkPT5jcmQubmFtZSA9PSBjYXJkTmFtZSkpID8gdHJ1ZSA6IGZhbHNlOyB9XHJcblxyXG4gICAgbm9uRmFjZUNhcmRzKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2FyZENvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wQXJyYXkgPSB0aGlzLmNhcmRzLmZpbHRlcihjcmQgPT4gY3JkLmZhY2UgPT0gZmFsc2UpO1xyXG4gICAgICAgICAgICBpZih0ZW1wQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBBcnJheTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b3BDYXJkKCl7XHJcbiAgICAgICAgcmV0dXJuICghIXRoaXMuY2FyZHMpP3RoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGgtMV06ZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0VG9wKHRoaXMuZWxlbWVudCgpLm9mZnNldFRvcCk7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0TGVmdCh0aGlzLmVsZW1lbnQoKS5vZmZzZXRMZWZ0KTtcclxuICAgICAgICAgICAgY2FyZC5zZXRaSW5kZXgodGhpcy5jYXJkcy5pbmRleE9mKGNhcmQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1vdmVDYXJkcyhjYXJkcykge1xyXG4gICAgICAgIGxldCB0ZW1wQ2FyZHMgPSAoY2FyZHMgaW5zdGFuY2VvZiBDYXJkKT8gW2NhcmRzXTogY2FyZHM7XHJcbiAgICAgICAgbGV0IGNhcmRJbmRleCA9IHRoaXMuY2FyZHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0ZW1wQ2FyZHNbMF0ubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHMuc3BsaWNlKGNhcmRJbmRleCwgdGhpcy5jYXJkcy5sZW5ndGggLSBjYXJkSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdENhcmRzKGN1cnJlbnRDYXJkKXtcclxuICAgICAgICAvL0ZpbmQgaW5kZXggb2YgY3VycmVudCBjYXJkXHJcbiAgICAgICAgbGV0IGNhcmRJbmRleCA9IHRoaXMuY2FyZHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBjdXJyZW50Q2FyZC5pZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHMuc2xpY2UoY2FyZEluZGV4LCB0aGlzLmNhcmRzLmxlbmd0aCk7XHJcbiAgICB9XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUXVpY2tTb2x2ZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IEZvdW5kYXRpb24gZnJvbSBcIi4uL0ZvdW5kYXRpb24vRm91bmRhdGlvblwiO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgXCIuL1F1aWNrU29sdmUuY3NzXCI7XHJcbmltcG9ydCBUYWxvbiBmcm9tIFwiLi4vVGFsb24vVGFsb25cIjtcclxuaW1wb3J0IFRhYmxlYXUgZnJvbSBcIi4uL1RhYmxlYXUvVGFibGVhdVwiO1xyXG5pbXBvcnQgU3RvY2sgZnJvbSBcIi4uL1N0b2NrL1N0b2NrXCI7XHJcbmltcG9ydCB7R0FNRV9GQUNFRE9XTl9DQVJEU19SRU1BSU4sIFBJTEVfU1RPQ0tfQ0xJQ0ssIENBUkRfTU9VU0VfRE9XTiwgR0FNRV9DQVJEU19SRU1BSU4sIEdBTUVfQ0hFQ0tfQ0FSRF9BR0FJTlNUX1BJTEVTfSBmcm9tIFwiLi4vR2xvYmFscy9HbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWlja1NvbHZle1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50KXtcclxuICAgICAgICB0aGlzLnNvbHZlID0gdGhpcy5zb2x2ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwicXVpY2tTb2x2ZVwiO1xyXG4gICAgICAgIHRoaXMuY2xpY2tFdmVudHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5zb2x2ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnNvbHZlVGltZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNoZWNrVGFibGVhdUJvdHRvbUNhcmRzID0gdGhpcy5jaGVja1RhYmxlYXVCb3R0b21DYXJkcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tUYWJsZWF1VG9wQ2FyZHMgPSB0aGlzLmNoZWNrVGFibGVhdVRvcENhcmRzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kZXN0cnVjdCA9IHRoaXMuZGVzdHJ1Y3QuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldEZvdW5kYXRpb25zID0gdGhpcy5nZXRGb3VuZGF0aW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3RvY2sgPSB0aGlzLmdldFN0b2NrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRUYWxvbiA9IHRoaXMuZ2V0VGFsb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFRhYmxlYXUgPSB0aGlzLmdldFRhYmxlYXUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2ggPSB0aGlzLnJlZnJlc2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG93SGlkZSA9IHRoaXMuc2hvd0hpZGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNvbHZlID0gdGhpcy5zb2x2ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudCgpIHsgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubmFtZSl9XHJcblxyXG4gICAgZGVzdHJ1Y3QoKSB7XHJcbiAgICAgICAgdGhpcy5jbGlja0V2ZW50cy5mb3JFYWNoKGl0ZW09Pnt0aGlzLmVsZW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKGl0ZW0udHJpZ2dlciwgaXRlbS5hY3Rpb24pfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50KCkucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rm91bmRhdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUuZmlsdGVyKHBpbGU9PnBpbGUgaW5zdGFuY2VvZiBGb3VuZGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9jaygpIHtcclxuICAgICAgICByZXR1cm4gU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maW5kKHBpbGU9PnBpbGUgaW5zdGFuY2VvZiBTdG9jayk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFsb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUuZmluZChwaWxlPT5waWxlIGluc3RhbmNlb2YgVGFsb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhYmxlYXUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUuZmlsdGVyKHBpbGU9PnBpbGUgaW5zdGFuY2VvZiBUYWJsZWF1KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0hpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbWUuaWQgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgbWUuaW5uZXJUZXh0ID0gXCJRdWljayBTb2x2ZVwiO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmVsZW1lbnQoKS5hcHBlbmRDaGlsZChtZSk7XHJcbiAgICAgICAgdGhpcy5jbGlja0V2ZW50cy5mb3JFYWNoKGl0ZW09Pnt0aGlzLmVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKGl0ZW0udHJpZ2dlciwgaXRlbS5hY3Rpb24pfSk7XHJcbiAgICAgICAgdGhpcy5zaG93SGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvbHZlICgpIHtcclxuICAgICAgICB0aGlzLnNvbHZlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKEdBTUVfQ0FSRFNfUkVNQUlOKCkpIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9NYXN0ZXIgQWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja1RhYmxlYXVUb3BDYXJkcygpKSB7IC8vQ2hlY2sgdGhlIFRhYmxlYXUgdG9wQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrVGFibGVhdUJvdHRvbUNhcmRzKCkpIHsgLy9DaGVjayB0aGUgVGFibGVhdSBib3R0b21DYXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja1RhbG9uKCkpIHsgLy9DaGVjayB0aGUgVGFsb24gdG9wQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0b2NrUGlsZSA9IHRoaXMuZ2V0U3RvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0b2NrUGlsZS5jYXJkQ291bnQoKSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRDYXJkID0gc3RvY2tQaWxlLnRvcENhcmQoKS5lbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0ge3RhcmdldDp0YXJnZXRDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENBUkRfTU9VU0VfRE9XTihldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBJTEVfU1RPQ0tfQ0xJQ0soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29sdmVUaW1lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1RhYmxlYXVCb3R0b21DYXJkcygpIHtcclxuICAgICAgICBsZXQgdG9QaWxlcyA9IFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUuZmlsdGVyKHBpbGU9PnBpbGUgaW5zdGFuY2VvZiBUYWJsZWF1KTtcclxuICAgICAgICBsZXQgdGVtcEZyb21QaWxlcyA9IFNUQVRFLkdBTUUuT0JKRUNUX1RSRUUuZmlsdGVyKHBpbGUgPT4gcGlsZSBpbnN0YW5jZW9mIFRhYmxlYXUgJiYgcGlsZS5jYXJkQ291bnQoKSA+IDApO1xyXG4gICAgICAgIGxldCBmcm9tUGlsZXMgPSB0ZW1wRnJvbVBpbGVzLmZpbHRlcihwaWxlID0+IHtcclxuICAgICAgICAgICAgaWYocGlsZS5mYWNlQ2FyZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYocGlsZS5mYWNlQ2FyZHMoKVswXS52YWx1ZSA9PSBcIk1cIiAmJiBwaWxlLm5vbkZhY2VDYXJkcygpID09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGZvdW5kID09IGZhbHNlICYmIGkgPCBmcm9tUGlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIFNUQVRFLkNBUkRfQUNUSU9OX0ZST01fUElMRSA9IGZyb21QaWxlc1tpXTtcclxuICAgICAgICAgICAgU1RBVEUuQ0FSRF9BQ1RJT05fQ0FSRFMgPSBmcm9tUGlsZXNbaV0uZmFjZUNhcmRzKCk7XHJcbiAgICAgICAgICAgIGlmKEdBTUVfQ0hFQ0tfQ0FSRF9BR0FJTlNUX1BJTEVTKFNUQVRFLkNBUkRfQUNUSU9OX0ZST01fUElMRSwgU1RBVEUuQ0FSRF9BQ1RJT05fQ0FSRFNbMF0sIHRvUGlsZXMpKXtcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tUYWJsZWF1VG9wQ2FyZHMoKSB7XHJcbiAgICAgICAgLy9DcmVhdGUgdG9QaWxlcyBhbmQgZnJvbVBpbGVzIGFycmF5XHJcbiAgICAgICAgbGV0IHRvUGlsZXMgPSAoR0FNRV9GQUNFRE9XTl9DQVJEU19SRU1BSU4oKSkgPyBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLmZpbHRlcihwaWxlPT4gcGlsZSBpbnN0YW5jZW9mIFRhYmxlYXUgfHwgcGlsZSBpbnN0YW5jZW9mIEZvdW5kYXRpb24pIDogU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maWx0ZXIocGlsZT0+IHBpbGUgaW5zdGFuY2VvZiBGb3VuZGF0aW9uKTtcclxuICAgICAgICBsZXQgZnJvbVBpbGVzID0gU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maWx0ZXIocGlsZSA9PiBwaWxlIGluc3RhbmNlb2YgVGFibGVhdSAmJiBwaWxlLmNhcmRDb3VudCgpID4gMCk7XHJcbiAgICAgICAgbGV0IHRlbXBGcm9tUGlsZXMgPSBmcm9tUGlsZXMuZmlsdGVyKHBpbGUgPT4ge1xyXG4gICAgICAgICAgICBpZihwaWxlLnRvcENhcmQoKS52YWx1ZSA9PSBcIk1cIiAmJiAhcGlsZS5ub25GYWNlQ2FyZHMoKSAmJiBHQU1FX0ZBQ0VET1dOX0NBUkRTX1JFTUFJTigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChmb3VuZCA9PSBmYWxzZSAmJiBpIDwgdGVtcEZyb21QaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgU1RBVEUuQ0FSRF9BQ1RJT05fRlJPTV9QSUxFID0gdGVtcEZyb21QaWxlc1tpXTtcclxuICAgICAgICAgICAgU1RBVEUuQ0FSRF9BQ1RJT05fQ0FSRFMgPSBbdGVtcEZyb21QaWxlc1tpXS50b3BDYXJkKCldO1xyXG4gICAgICAgICAgICBpZihHQU1FX0NIRUNLX0NBUkRfQUdBSU5TVF9QSUxFUyhTVEFURS5DQVJEX0FDVElPTl9GUk9NX1BJTEUsIFNUQVRFLkNBUkRfQUNUSU9OX0NBUkRTWzBdLCB0b1BpbGVzKSl7XHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVGFsb24oKSB7XHJcbiAgICAgICAgU1RBVEUuQ0FSRF9BQ1RJT05fQ0FSRFMgPSBTVEFURS5HQU1FLk9CSkVDVF9UUkVFLmZpbmQocGlsZSA9PiBwaWxlIGluc3RhbmNlb2YgVGFsb24pO1xyXG4gICAgICAgIGlmKFNUQVRFLkNBUkRfQUNUSU9OX0NBUkRTLmNhcmRDb3VudCgpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b1BpbGVzID0gU1RBVEUuR0FNRS5PQkpFQ1RfVFJFRS5maWx0ZXIocGlsZT0+IHBpbGUgaW5zdGFuY2VvZiBUYWJsZWF1IHx8IHBpbGUgaW5zdGFuY2VvZiBGb3VuZGF0aW9uKTtcclxuICAgICAgICAgICAgU1RBVEUuQ0FSRF9BQ1RJT05fQ0FSRFMgPSBbU1RBVEUuQ0FSRF9BQ1RJT05fQ0FSRFMudG9wQ2FyZCgpXTtcclxuICAgICAgICAgICAgcmV0dXJuIChHQU1FX0NIRUNLX0NBUkRfQUdBSU5TVF9QSUxFUyhTVEFURS5DQVJEX0FDVElPTl9DQVJEUywgU1RBVEUuQ0FSRF9BQ1RJT05fQ0FSRFMsIHRvUGlsZXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dIaWRlKCkge1xyXG4gICAgICAgIGlmKFNUQVRFLkdBTUVfV0lOX0RFVEVDVEVEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vU1RBVEUgc2hvdWxkIGJlIGFjY2Vzc2VkIGFuZCB1cGRhdGVkIG9ubHkgdGhyb3VnaCBHTE9CQUxTP1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9DYXB0dXJlcyB0aGUgYWN0aW9uIGNhcmRcclxuICAgICAgICB0aGlzLkNBUkRfQUNUSU9OID0ge1xyXG4gICAgICAgICAgICBDQVJEUzogW10sXHJcbiAgICAgICAgICAgIEZST01fUElMRTogZmFsc2UsXHJcbiAgICAgICAgICAgIE1PVVNFX09SSUdfUE9TOiBmYWxzZSxcclxuICAgICAgICAgICAgVEFSR0VUOiBmYWxzZSxcclxuICAgICAgICAgICAgVE9fUElMRTogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQ0FSRF9EQkxfQ0xJQ0sgPSB7XHJcbiAgICAgICAgICAgIFNUQVRVUzogZmFsc2UsIC8vVW51c2VkLCBidXQgbWlnaHQgYmUgdXNlZFxyXG4gICAgICAgICAgICBUQVJHRVQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBUSU1FUjogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQ0FSRF9EUkFHID0ge1xyXG4gICAgICAgICAgICBTVEFUVVM6IGZhbHNlLFxyXG4gICAgICAgICAgICBUQVJHRVQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBUSU1FUjogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQ0FSRF9NT1VTRSA9IHtcclxuICAgICAgICAgICAgRE9XTjogZmFsc2UsIC8vVHJhY2tzIGN1cnJlbnQgbW91c2UgZG93biBzdGF0dXNcclxuICAgICAgICAgICAgRE9XTl9USU1FUjogZmFsc2UgLy9EZWxheWVkIGNhbmNlbGF0aW9uIG9mIHRoZSBtb3VzZSBkb3duIGFjdGlvblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5HQU1FID0ge1xyXG4gICAgICAgICAgICBERUNLX1NUUklORzogZmFsc2UsXHJcbiAgICAgICAgICAgIE1PQklMRV9VU0VSOiBmYWxzZSxcclxuICAgICAgICAgICAgTU9WRV9ISVNUT1JZOiBbXSxcclxuICAgICAgICAgICAgT0JKRUNUX1RSRUU6IFtdLFxyXG4gICAgICAgICAgICBXSU5fREVURUNURUQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuV0lORE9XID0ge1xyXG4gICAgICAgICAgICBNRU5VX09QRU46IHRydWUsXHJcbiAgICAgICAgICAgIE1PVVNFX1BPUzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLkdBTUUuT0JKRUNUX1RSRUUuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJ1Y3QoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuQ0FSRF9BQ1RJT04gPSB7XHJcbiAgICAgICAgICAgIENBUkRTOiBbXSxcclxuICAgICAgICAgICAgRlJPTV9QSUxFOiBmYWxzZSxcclxuICAgICAgICAgICAgTU9VU0VfT1JJR19QT1M6IGZhbHNlLFxyXG4gICAgICAgICAgICBUQVJHRVQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBUT19QSUxFOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5DQVJEX0RCTF9DTElDSyA9IHtcclxuICAgICAgICAgICAgU1RBVFVTOiBmYWxzZSwgLy9VbnVzZWQsIGJ1dCBtaWdodCBiZSB1c2VkXHJcbiAgICAgICAgICAgIFRBUkdFVDogZmFsc2UsXHJcbiAgICAgICAgICAgIFRJTUVSOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5DQVJEX0RSQUcgPSB7XHJcbiAgICAgICAgICAgIFNUQVRVUzogZmFsc2UsXHJcbiAgICAgICAgICAgIFRBUkdFVDogZmFsc2UsXHJcbiAgICAgICAgICAgIFRJTUVSOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5DQVJEX01PVVNFID0ge1xyXG4gICAgICAgICAgICBET1dOOiBmYWxzZSwgLy9UcmFja3MgY3VycmVudCBtb3VzZSBkb3duIHN0YXR1c1xyXG4gICAgICAgICAgICBET1dOX1RJTUVSOiBmYWxzZSAvL0RlbGF5ZWQgY2FuY2VsYXRpb24gb2YgdGhlIG1vdXNlIGRvd24gYWN0aW9uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkdBTUUgPSB7XHJcbiAgICAgICAgICAgIERFQ0tfU1RSSU5HOiBmYWxzZSxcclxuICAgICAgICAgICAgTU9CSUxFX1VTRVI6IGZhbHNlLFxyXG4gICAgICAgICAgICBNT1ZFX0hJU1RPUlk6IFtdLFxyXG4gICAgICAgICAgICBPQkpFQ1RfVFJFRTogW10sXHJcbiAgICAgICAgICAgIFdJTl9ERVRFQ1RFRDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5XSU5ET1cgPSB7XHJcbiAgICAgICAgICAgIE1FTlVfT1BFTjogdHJ1ZSxcclxuICAgICAgICAgICAgTU9VU0VfUE9TOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBQaWxlIGZyb20gJy4uL1BpbGUvUGlsZSc7XHJcbmltcG9ydCB7UElMRV9TVE9DS19DTElDS30gZnJvbSAnLi4vR2xvYmFscy9HbG9iYWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b2NrIGV4dGVuZHMgUGlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIG5hbWUpe1xyXG4gICAgICAgIHN1cGVyKHBhcmVudCwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGlja0V2ZW50cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCJtb3VzZWRvd25cIixcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogUElMRV9TVE9DS19DTElDS1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZU1vdmUgPSB0aGlzLnZhbGlkYXRlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lLmlkID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIG1lLnN0eWxlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jc3NDbGFzc2VzLmZvckVhY2goaXRlbSA9PiBtZS5jbGFzc0xpc3QuYWRkKGl0ZW0pKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5lbGVtZW50KCkuYXBwZW5kQ2hpbGQobWUpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tFdmVudHMuZm9yRWFjaChpdGVtID0+IG1lLmFkZEV2ZW50TGlzdGVuZXIoaXRlbS50cmlnZ2VyLCBpdGVtLmFjdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlTW92ZShhQ2FyZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ZhbGlkYXRlIE1vdmUnKTtcclxuICAgIH1cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJsZWF1LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCBQaWxlIGZyb20gJy4uL1BpbGUvUGlsZSc7XHJcbmltcG9ydCB7RnJvbUFscGhhfSBmcm9tICcuLi9Db252ZXJzaW9uL0NvbnZlcnNpb24nO1xyXG5pbXBvcnQgJy4vVGFibGVhdS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVhdSBleHRlbmRzIFBpbGUge1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIocGFyZW50LCBuYW1lKTtcclxuICAgICAgICB0aGlzLmNzc0NsYXNzZXMgPSBbJ3RhYmxlYXUnXTtcclxuICAgICAgICB0aGlzLmxpbWl0ID0gbmFtZS5jaGFyQXQobmFtZS5sZW5ndGgtMSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoID0gdGhpcy5yZWZyZXNoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc29sdmVkID0gdGhpcy5zb2x2ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlTW92ZSA9IHRoaXMudmFsaWRhdGVNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzb2x2ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNhcmRzLmZpbmQoY3JkPT5jcmQuZmFjZSA9PSBmYWxzZSkgaW5zdGFuY2VvZiBDYXJkKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2FyZHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgbGV0IG1hcmdpblRvdGFsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5zZXRUb3AodGhpcy5lbGVtZW50KCkub2Zmc2V0VG9wICsgbWFyZ2luVG90YWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2VNYXJnaW4gPSBjYXJkLmdldEhlaWdodCgpIC8gNDtcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvdGFsID0gKGNhcmQuZmFjZSk/IG1hcmdpblRvdGFsICsgYmFzZU1hcmdpbiA6IG1hcmdpblRvdGFsICsgYmFzZU1hcmdpbiAvIDI7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnNldExlZnQodGhpcy5nZXRMZWZ0KCkpO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5zZXRaSW5kZXgodGhpcy5jYXJkcy5pbmRleE9mKGNhcmQpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lLmlkID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIG1lLnN0eWxlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jc3NDbGFzc2VzLmZvckVhY2goaXRlbSA9PiBtZS5jbGFzc0xpc3QuYWRkKGl0ZW0pKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5lbGVtZW50KCkuYXBwZW5kQ2hpbGQobWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlTW92ZShhQ2FyZCkge1xyXG4gICAgICAgIGxldCB0ZW1wQ2FyZCA9IFtdO1xyXG4gICAgICAgIGlmKGFDYXJkIGluc3RhbmNlb2YgQ2FyZCkge1xyXG4gICAgICAgICAgICB0ZW1wQ2FyZC5wdXNoKGFDYXJkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wQ2FyZCA9IGFDYXJkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNhcmRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGlmKCh0ZW1wQ2FyZFswXS5jb2xvciAhPSB0aGlzLnRvcENhcmQoKS5jb2xvcikgJiYgKEZyb21BbHBoYSh0ZW1wQ2FyZFswXS52YWx1ZSkgPT0gRnJvbUFscGhhKHRoaXMudG9wQ2FyZCgpLnZhbHVlKSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH0gZWxzZSBpZigoRnJvbUFscGhhKHRlbXBDYXJkWzBdLnZhbHVlKSA9PSAxMikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBpbGUgZnJvbSAnLi4vUGlsZS9QaWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbG9uIGV4dGVuZHMgUGlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIG5hbWUpe1xyXG4gICAgICAgIHN1cGVyKHBhcmVudCwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVNb3ZlID0gdGhpcy52YWxpZGF0ZU1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZS5pZCA9IHRoaXMubmFtZTtcclxuICAgICAgICBtZS5zdHlsZS56SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY3NzQ2xhc3Nlcy5mb3JFYWNoKGl0ZW0gPT4gbWUuY2xhc3NMaXN0LmFkZChpdGVtKSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuZWxlbWVudCgpLmFwcGVuZENoaWxkKG1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZU1vdmUoYUNhcmQpe1xyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgR2FtZU1lbnUgZnJvbSAnLi9HYW1lTWVudS9HYW1lTWVudSc7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQge1JFRlJFU0hfU0NSRUVOLCBXSU5ET1dfTU9VU0VfTU9WRSwgV0lORE9XX01PVVNFX1VQLCBERVRFQ1RfTU9CSUxFX1VTRVJ9IGZyb20gJy4vR2xvYmFscy9HbG9iYWxzJztcclxuaW1wb3J0IFN0YXRlIGZyb20gJy4vU3RhdGUvU3RhdGUnO1xyXG5cclxubGV0IFNUQVRFID0gbmV3IFN0YXRlO1xyXG5sZXQgR0FNRV9NRU5VID0gbmV3IEdhbWVNZW51KGRvY3VtZW50LmJvZHkpO1xyXG5leHBvcnQgeyBTVEFURSwgR0FNRV9NRU5VIH07XHJcblxyXG5ERVRFQ1RfTU9CSUxFX1VTRVIoKTtcclxuUkVGUkVTSF9TQ1JFRU4oKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBSRUZSRVNIX1NDUkVFTik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIFJFRlJFU0hfU0NSRUVOKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIFdJTkRPV19NT1VTRV9NT1ZFKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBXSU5ET1dfTU9VU0VfVVApOyJdLCJzb3VyY2VSb290IjoiIn0=