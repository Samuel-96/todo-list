/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    background-color: #1A1A1D;\n    font-family: 'Roboto', sans-serif, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nmain{\n    display: flex;\n    flex-wrap: wrap;\n    border-radius: 6px;\n    gap: 10px;\n}\n\n.contenedor-superior {\n    padding: 0.5em; \n    flex: 1 100%;\n    border-radius: 6px;\n    background-color: #545461;\n    color: rgb(255, 255, 255);\n    font-weight: bold;\n}\n\n.contenedor-superior h1{\n    width: 30%;\n    border: none;\n    border-radius: 6px;\n    color: rgb(255, 255, 255);\n    border-bottom: 3px solid #e34747;\n    padding-bottom: 10px;\n}\n\nh2{\n    display: flex;\n    justify-content: center;\n    font-weight: bolder;\n    font-style: oblique 5deg;\n    text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);\n}\n\n.contenedor-menu{\n    display: flex;\n    flex-direction: row;\n}\n\n.contenedor-menu img{\n    margin: 3px;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n}\n\n.contenedor-lateral-izq { \n    flex: 0.4;\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n    padding: 0.5em;\n    border-radius: 6px;\n    background-color: #545461;\n    \n}\n\n.contenedor-lateral-izq form{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding: 0.3em;\n}\n\n#nueva-carpeta{\n    width: 70%;\n    border: none;\n    font-size: large;\n    border-radius: 6px;\n    background-color: #42424b;\n    font-weight: bold;\n    color: rgb(255, 255, 255);\n    border-bottom: 1px solid #e34747;\n    padding-bottom: 10px;\n    text-align: center;\n    padding: 0.3em;\n}\n\n\n#nueva-carpeta:focus::placeholder,\n#nueva-carpeta:-moz-focusring::placeholder {\n    color: transparent;\n}\n\n#nueva-carpeta:focus {\n    outline: 0.3px solid #e34747;\n    box-shadow: 0 0 2px #e34747;\n}\n\n#crear-carpeta {\n    padding: 10px 20px;\n    font-size: 16px;\n    background-color: #007BFF; \n    color: #fff;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer; \n    transition: background-color 0.3s ease-in-out;\n}\n\n.contenedor-carpetas{\n    display: flex;\n    align-items: center;\n    border-radius: 8px;\n    margin: 8px;\n    padding: 0.2em;\n    background-color: #035ab7;\n    -webkit-box-shadow: 5px 5px 5px 2px #1A1A1D;; \n    box-shadow: 5px 5px 5px px #1A1A1D;\n    padding: 0.5em;\n    color: white;\n    font-weight: bold;\n    gap: 10px;\n    cursor: pointer;\n    transition: background-color 0.5s ease;\n}\n\n.contenedor-carpetas:hover{\n    background-color: #024388;\n}\n\n.contenedor-carpetas p{\n    width: 80%;\n}\n\n.contenedor-carpetas img{\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.contenedor-lateral-dcho {\n    flex: 1;\n    min-width: 200px;\n    border-radius: 6px; \n    background-color: rgba(47, 46, 46, 0.771);\n    height: 100%;\n    padding: 1em;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 700px;\n}\n\n.info-añadir-nota{\n    padding: 1em;\n    margin: 0 auto;\n    height: 6%;\n    width: 95%;\n    background-color: #878787;\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    text-align: center;\n    justify-content: space-between;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 9px;\n    align-items: center;\n}\n\n.info-añadir-nota img{\n    height: 60px;\n    width: 60px;\n    transition: transform 0.1s;\n    cursor: pointer;\n}\n\n.info-añadir-nota img:hover {\n    transform: scale(1.2);\n}\n\n.contenedor-notas{\n    padding: 1em;\n    margin: 0 auto;\n    height: 6%;\n    width: 95%;\n    background-color: #e3474799;;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 9px;\n    justify-content: center;\n    cursor: pointer;\n}\n/*\n.contenedor-notas:hover {\n    transform: translate(-3px, -3px);;\n    transition: transform 0.2s ease;\n}\n*/\n\n.nota{\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n.contenedor-aviso {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: rgb(56, 56, 56);\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n    padding: 20px;\n    text-align: center;\n    color: white;\n}\n\n.contenedor-aviso h1 {\n    margin-bottom: 10px;\n}\n\n#mostrarAviso {\n    margin-top: 20px;\n}\n\n#contenedorAviso button{\n    padding: 10px 20px;\n    font-size: 16px;\n    background-color: #007BFF; \n    color: #fff;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer; \n    transition: background-color 0.3s ease-in-out;\n}\n\n.añadir-nota{\n    display: none;\n    flex-direction: column;\n    gap: 10px;\n    position: fixed;\n    flex-wrap: wrap;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: rgb(56, 56, 56);\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n    padding: 20px;\n    text-align: center;\n    color: white;\n    height: 460px;\n}\n\n.añadir-nota form{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    border-style: none;\n    pad: 0.5em;\n    \n}\n\n.añadir-nota form input{\n    font-size: 20px;\n}\n\n#crear-nota{\n    padding: 10px 20px;\n    font-size: 16px;\n    background-color: #007BFF; \n    color: #fff;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer; \n    transition: background-color 0.3s ease-in-out;\n}\n\n.cancelar-nota{\n    padding: 10px 20px;\n    font-size: 16px;\n    background-color: #e3474799; \n    color: #fff;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer; \n    transition: background-color 0.3s ease-in-out;\n}\n\n#overlay {\n    position: fixed;\n    display: none;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 2;\n    cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_addButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/addButtons.js */ \"./src/scripts/addButtons.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _scripts_addImages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/addImages.js */ \"./src/scripts/addImages.js\");\n\n\n\n\n(0,_scripts_addImages_js__WEBPACK_IMPORTED_MODULE_2__.addImages)();\n(0,_scripts_addButtons_js__WEBPACK_IMPORTED_MODULE_0__[\"añadirBotones\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/scripts/addButtons.js":
/*!***********************************!*\
  !*** ./src/scripts/addButtons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"añadirBotones\": () => (/* binding */ añadirBotones)\n/* harmony export */ });\n/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ \"./src/scripts/objects.js\");\n\nlet carpetaSeleccionada = null;\n\nfunction añadirBotones(){\n    //declaracion de botones\n    const botonCrearCarpeta = document.querySelector(\"#crear-carpeta\");   \n    const botonAñadirNota = document.querySelector(\".nueva-nota\");\n    const cancelarNota = document.querySelector(\".cancelar-nota\");\n\n\n    cancelarNota.addEventListener(\"click\", function(){\n        document.querySelector(\".añadir-nota\").style.display = \"none\";\n        desactivarOverlay();\n    });\n\n    //boton de crear carpetaa \n    botonCrearCarpeta.addEventListener(\"click\", function(){ \n        //obtenemos el nombre de la nueva carpeta\n        const campoNuevaCarpeta = document.querySelector(\"#nueva-carpeta\");\n        let nombreCarpeta = campoNuevaCarpeta.value;\n        if(nombreCarpeta === \"\"){\n            const avisoh1 = document.querySelector(\".aviso\");\n            avisoh1.textContent = \"El nombre de la carpeta no puede estar vacío\";\n            activarAviso();\n        }\n        else{\n            const nuevaCarpeta = new _objects_js__WEBPACK_IMPORTED_MODULE_0__.Carpeta(nombreCarpeta);\n\n            // Agregar el contenedor al documento\n            const contLatIzq = document.querySelector(\".contenedor-lateral-izq\");\n            contLatIzq.appendChild(nuevaCarpeta.divCarpeta);\n        }\n    });\n\n    //boton de añadir nota \n    botonAñadirNota.addEventListener(\"click\", comprobarCarpetaSeleccionada);\n}\n\nfunction activarAviso(){\n\n    const contenedorAviso = document.getElementById(\"contenedorAviso\");\n    const cerrarAvisoBtn = document.getElementById(\"cerrarAviso\");\n    contenedorAviso.style.display = \"block\";\n    cerrarAvisoBtn.addEventListener(\"click\", () => {\n        contenedorAviso.style.display = \"none\";\n    });\n}\n\nfunction comprobarCarpetaSeleccionada() {\n    let carpetas = document.querySelectorAll(\".contenedor-carpetas\");\n\n    carpetas.forEach(carpeta => {\n        let estiloBorde = carpeta.style.borderColor;\n        if (estiloBorde === \"white\") {\n            console.log(\"Carpeta seleccionada. Nombre de la carpeta: \" + carpeta.querySelector(\"p\").textContent);\n            carpetaSeleccionada = carpeta.carpetaInstance;\n            añadirNota();\n            \n        }\n\n        else{\n            const avisoh1 = document.querySelector(\".aviso\");\n            avisoh1.textContent = \"Debes seleccionar antes una carpeta donde guardar las notas\";\n            const eliminarAvisoBtn = document.getElementById(\"eliminar\");\n            eliminarAvisoBtn.style.display = \"none\";\n            activarAviso();\n        }\n    });\n\n}\n\nfunction añadirNota(){\n    if (carpetaSeleccionada !== null) {\n        activarOverlay();\n        const añadirNotaDiv = document.querySelector(\".añadir-nota\");\n        añadirNotaDiv.style.zIndex = \"3\";\n        añadirNotaDiv.style.display = \"flex\";\n        \n        const btnCrearNota = document.querySelector(\"#crear-nota\");\n\n        btnCrearNota.addEventListener(\"click\", crearNota);\n        \n    } else {\n        console.log(\"Debes seleccionar antes una carpeta donde guardar las notas\");\n    }\n}\n\nfunction activarOverlay() {\n    const overlay = document.getElementById(\"overlay\");\n    overlay.style.display = \"block\";\n}\n\nfunction desactivarOverlay() {\n    const overlay = document.getElementById(\"overlay\");\n    overlay.style.display = \"none\";\n}\n\nfunction crearNota() {\n    // Obtener valores del formulario\n    const titulo = document.querySelector(\"#titulo-nota\").value;\n    const fecha = document.querySelector(\"#fecha-nota\").value;\n    const descripcion = document.querySelector(\"#descripcion-nota\").value;\n\n    // Crear una instancia de Nota\n    const nuevaNota = new Nota(titulo, fecha, descripcion);\n\n    // Verificar que haya una carpeta seleccionada\n    if (carpetaSeleccionada !== null) {\n        carpetaSeleccionada.añadirNotas(nuevaNota);\n        console.log(carpetaSeleccionada.mostrarNotas());\n    } else {\n        console.log(\"Debes seleccionar antes una carpeta donde guardar las notas\");\n    }\n\n    // Resto del código para mostrar las notas en el contenedor derecho\n}\n\nclass Nota{\n    constructor(titulo, fecha, descripcion){\n        this.titulo = titulo;\n        this.fecha = fecha;\n        this.descripcion = descripcion;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/scripts/addButtons.js?");

/***/ }),

/***/ "./src/scripts/addImages.js":
/*!**********************************!*\
  !*** ./src/scripts/addImages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addImages: () => (/* binding */ addImages)\n/* harmony export */ });\n/* harmony import */ var _assets_folder_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/folder.png */ \"./src/assets/folder.png\");\n/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/add.png */ \"./src/assets/add.png\");\n/* harmony import */ var _assets_borrar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/borrar.png */ \"./src/assets/borrar.png\");\n/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects.js */ \"./src/scripts/objects.js\");\n\n\n\n\n\nfunction addImages(){\n\n    const nuevaNota = document.querySelector(\".nueva-nota\");\n    nuevaNota.src = _assets_add_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    const nuevaCarpeta = new _objects_js__WEBPACK_IMPORTED_MODULE_3__.Carpeta(\"Carpeta inicial\");\n    nuevaCarpeta.divCarpeta.id = \"carpeta-inicial\";\n    nuevaCarpeta.divCarpeta.querySelector(\".borrar-carpeta\").remove();\n    const contLatIzq = document.querySelector(\".contenedor-lateral-izq\");\n    contLatIzq.appendChild(nuevaCarpeta.divCarpeta);\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/scripts/addImages.js?");

/***/ }),

/***/ "./src/scripts/objects.js":
/*!********************************!*\
  !*** ./src/scripts/objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Carpeta: () => (/* binding */ Carpeta)\n/* harmony export */ });\n/* harmony import */ var _assets_folder_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/folder.png */ \"./src/assets/folder.png\");\n/* harmony import */ var _assets_borrar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/borrar.png */ \"./src/assets/borrar.png\");\n\n\n\nlet clicable = true;\nclass Carpeta {\n\n    constructor(nombreCarpeta) {\n        this.nombre = nombreCarpeta;\n        this.divCarpeta = this.crearCarpeta();\n        this.agregarEventListeners();\n        this.focus = false;\n        this.seleccionada = false;\n        this.coleccionNotas = [];\n        this.divCarpeta.carpetaInstance = this;\n    }\n\n    añadirNotas(nota){\n        this.coleccionNotas.push(nota);\n    }\n\n    borrarNota(nombreNota){\n        this.coleccionNotas = this.coleccionNotas.filter(nota => nota.nombre !== nombreNota);\n    }\n\n    mostrarNotas(){\n        const contenedorNotas = document.querySelector(\".contenedor-notas\");\n        if(contenedorNotas !== null){\n            contenedorNotas.innerHTML = '';\n            contenedorNotas.remove();\n            return this.coleccionNotas;\n        }\n        \n        return this.coleccionNotas;\n    }\n\n    // Método para crear la estructura de la carpeta\n    crearCarpeta() {\n        \n        const contenedor = document.createElement(\"div\");\n        contenedor.classList.add(\"contenedor-carpetas\");\n\n        const img1 = document.createElement(\"img\");\n        img1.src = _assets_folder_png__WEBPACK_IMPORTED_MODULE_0__;\n        img1.alt = \"Carpeta inicial\";\n\n        const parrafo = document.createElement(\"p\");\n        parrafo.textContent = this.nombre;\n\n        const img2 = document.createElement(\"img\");\n        img2.src = _assets_borrar_png__WEBPACK_IMPORTED_MODULE_1__;\n        img2.alt = \"Borrar carpeta\";\n        img2.classList.add(\"borrar-carpeta\")\n\n        contenedor.appendChild(img1);\n        contenedor.appendChild(parrafo);\n        contenedor.appendChild(img2);\n\n        return contenedor;\n    }\n\n    // Método para agregar event listeners\n    agregarEventListeners() {\n        this.divCarpeta.querySelector(\".borrar-carpeta\").addEventListener(\"click\", () => this.borrarCarpeta());\n        this.divCarpeta.addEventListener(\"click\", this.seleccionarCarpeta.bind(this));\n    }\n\n    borrarCarpeta() {\n        // Lógica para borrar la carpeta\n        const avisoh1 = document.querySelector(\".aviso\");\n        avisoh1.textContent = \"¿Estás seguro de eliminar esta carpeta y todo su contenido?\";\n        const eliminarAvisoBtn = document.querySelector(\"#eliminar\");\n        const cerrarAvisoBtn = document.querySelector(\"#cerrarAviso\");\n        activarAviso();\n        this.seleccionada = true; // Marcar la carpeta como seleccionada\n\n        //se acepta la eliminación\n        eliminarAvisoBtn.addEventListener(\"click\", () => {\n            if (this.seleccionada) {\n                const carpetaClickeada = this.divCarpeta;\n                desactivarAviso();\n                carpetaClickeada.remove();\n                this.seleccionada = false; // Desmarcar la carpeta como seleccionada después de borrarla\n            }\n        });\n\n        // Cancelar la selección si se cierra el aviso sin eliminar\n        cerrarAvisoBtn.addEventListener(\"click\", () => {\n            this.seleccionada = false; // Desmarcar la carpeta como seleccionada\n            desactivarAviso();\n        });\n        \n    }\n    \n\n    seleccionarCarpeta(event) {\n        // Lógica para seleccionar la carpeta\n        const elementoSeleccionado = event.target;\n        const h2CarpetaSeleccionada = document.querySelector(\"#nombre-carpeta-seleccionada\");\n\n        if(this.focus === false && clicable === true){\n            if(elementoSeleccionado.classList.value !== \"borrar-carpeta\" && elementoSeleccionado.parentNode.classList.value === \"contenedor-carpetas\"){\n               \n                elementoSeleccionado.parentNode.style.borderStyle = \"solid\";\n                elementoSeleccionado.parentNode.style.borderColor = \"white\";\n                h2CarpetaSeleccionada.textContent = elementoSeleccionado.textContent;\n                this.focus = true;\n                clicable = false;\n                this.mostrarNotas();\n                \n            }\n            else if(elementoSeleccionado.classList.value === \"contenedor-carpetas\"){\n\n                this.divCarpeta.style.borderStyle = \"solid\";\n                this.divCarpeta.style.borderColor = \"white\";\n                h2CarpetaSeleccionada.textContent = this.divCarpeta.children[1].textContent;\n                this.focus = true;\n                clicable = false;\n                this.mostrarNotas();\n\n            }\n        }\n        else if(this.focus === true && clicable === false){\n            this.divCarpeta.parentNode.style.borderColor = \"black\";\n            this.divCarpeta.parentNode.style.borderStyle = \"none\";\n            this.divCarpeta.style.borderColor = \"black\";\n            this.divCarpeta.style.borderStyle = \"none\";\n            this.focus = false;\n            clicable = true;\n            this.divCarpeta.textContent;\n            h2CarpetaSeleccionada.textContent = \"\";\n            console.log(\"deseleccionada la carpeta\");\n        }\n        \n        event.stopPropagation();\n    }\n}\n\nfunction activarAviso(){\n\n    const contenedorAviso = document.getElementById(\"contenedorAviso\");\n    const cerrarAvisoBtn = document.getElementById(\"cerrarAviso\");\n    contenedorAviso.style.display = \"block\";\n    cerrarAvisoBtn.addEventListener(\"click\", () => {\n        contenedorAviso.style.display = \"none\";\n    });\n}\n\nfunction desactivarAviso(){\n    const contenedorAviso = document.getElementById(\"contenedorAviso\");\n    contenedorAviso.style.display = \"none\";\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/scripts/objects.js?");

/***/ }),

/***/ "./src/assets/add.png":
/*!****************************!*\
  !*** ./src/assets/add.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5c4b6f17a737e56c455.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/add.png?");

/***/ }),

/***/ "./src/assets/borrar.png":
/*!*******************************!*\
  !*** ./src/assets/borrar.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23f0c91c9c1c66a438c1.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/borrar.png?");

/***/ }),

/***/ "./src/assets/folder.png":
/*!*******************************!*\
  !*** ./src/assets/folder.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"925e20f6d63f4cca1812.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/folder.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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