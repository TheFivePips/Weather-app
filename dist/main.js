/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/laurel-balyeat-ExarETx4xNA-unsplash.jpg */ "./assets/laurel-balyeat-ExarETx4xNA-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  \n}\nheader{\n  display: grid;\n  grid-template-columns: repeat(2,1fr) 2fr repeat(2,1fr);\n  grid-template-rows: 1fr;\n}\n#logo{\n  grid-area: 1/1/2/2;\n  width: 250px;\n  place-self: center;\n  opacity: 0.9;\n\n}\nform{\n  grid-area: 1/3/2/4;\n  place-self: center;\n\n}\n\n.content{\n  display:grid;\n  transform: translate(0px, 9rem);\n  \n}\n.content>*{\n  color: black\n  \n}\n#today-title{\n  place-self: center;\n\n}\n.today{\n  margin: 10px;\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  grid-template-rows: repeat(2, 1fr);\n  place-self: center;\n  background-color: lightblue;\n  opacity: 0.8;\n  width: 1000px;\n  \n  border: 1px solid black;\n}\n\n.today > *{\n  margin: 10px;\n  place-self: center;\n}\n\n.today > button {\n  width: 20px;\n}\n\n#weather-icon{\n  width: 7rem;\n  grid-area: 1/1/3/2;\n}\n\n#temp{\n  font-size: 40px;\n  grid-area: 1/2/4/3;\n}\n\n#feels-like{\n  grid-area: 1/3/2/4;\n}\n\n#description{\n  grid-area: 3/1/4/2;\n}\n\n#humidity{\n  grid-area: 2/3/3/4;\n}\n\n.switch{\n  grid-area: 3/3/4/4;\n}\n\n#hourly-title{\n  display: flex;\n  justify-content: center;\n}\n.hourly-content{\n  display: flex;\n  justify-content: center;\n  \n}\n.hourly-block{\n  border: 1px solid black;\n  width: 30vw;\n  display: grid;\n  place-items: center;\n  background-color: lightblue;\n  opacity: 0.7;\n}\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  .switch input { \n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yDAAwE;;AAE1E;AACA;EACE,aAAa;EACb,sDAAsD;EACtD,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;;AAEd;AACA;EACE,kBAAkB;EAClB,kBAAkB;;AAEpB;;AAEA;EACE,YAAY;EACZ,+BAA+B;;AAEjC;AACA;EACE;;AAEF;AACA;EACE,kBAAkB;;AAEpB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,kCAAkC;EAClC,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;EACZ,aAAa;;EAEb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uBAAuB;;AAEzB;AACA;EACE,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,YAAY;AACd;AACA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;EAC7B","sourcesContent":["body{\n  background-image: url(../assets/laurel-balyeat-ExarETx4xNA-unsplash.jpg);\n  \n}\nheader{\n  display: grid;\n  grid-template-columns: repeat(2,1fr) 2fr repeat(2,1fr);\n  grid-template-rows: 1fr;\n}\n#logo{\n  grid-area: 1/1/2/2;\n  width: 250px;\n  place-self: center;\n  opacity: 0.9;\n\n}\nform{\n  grid-area: 1/3/2/4;\n  place-self: center;\n\n}\n\n.content{\n  display:grid;\n  transform: translate(0px, 9rem);\n  \n}\n.content>*{\n  color: black\n  \n}\n#today-title{\n  place-self: center;\n\n}\n.today{\n  margin: 10px;\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  grid-template-rows: repeat(2, 1fr);\n  place-self: center;\n  background-color: lightblue;\n  opacity: 0.8;\n  width: 1000px;\n  \n  border: 1px solid black;\n}\n\n.today > *{\n  margin: 10px;\n  place-self: center;\n}\n\n.today > button {\n  width: 20px;\n}\n\n#weather-icon{\n  width: 7rem;\n  grid-area: 1/1/3/2;\n}\n\n#temp{\n  font-size: 40px;\n  grid-area: 1/2/4/3;\n}\n\n#feels-like{\n  grid-area: 1/3/2/4;\n}\n\n#description{\n  grid-area: 3/1/4/2;\n}\n\n#humidity{\n  grid-area: 2/3/3/4;\n}\n\n.switch{\n  grid-area: 3/3/4/4;\n}\n\n#hourly-title{\n  display: flex;\n  justify-content: center;\n}\n.hourly-content{\n  display: flex;\n  justify-content: center;\n  \n}\n.hourly-block{\n  border: 1px solid black;\n  width: 30vw;\n  display: grid;\n  place-items: center;\n  background-color: lightblue;\n  opacity: 0.7;\n}\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  .switch input { \n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIKEY": () => (/* binding */ APIKEY)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_logo_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.jpeg */ "./assets/logo.jpeg");
/* harmony import */ var _modules_getCoords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getCoords */ "./src/modules/getCoords.js");




const APIKEY = '6a05651102c94de61e3f7cf2e46a1338'

const logo = document.getElementById('logo')
logo.src = _assets_logo_jpeg__WEBPACK_IMPORTED_MODULE_1__

const searchBtn = document.getElementById('searchbtn')

searchBtn.addEventListener('click', function(e){
    e.preventDefault()
    const hourlyContent = document.querySelector('.hourly-content')
    hourlyContent.replaceChildren()
    
    let input = document.getElementById('input').value
    let location = input.split(', ')
    let cityname = location[0]
    let statecode = location[1]
    let countrycode = location[2]
    
    ;(0,_modules_getCoords__WEBPACK_IMPORTED_MODULE_2__["default"])(cityname, statecode, countrycode)
})

;(0,_modules_getCoords__WEBPACK_IMPORTED_MODULE_2__["default"])('Cooperstown', 'NY', 'USA')

/***/ }),

/***/ "./src/modules/buildContent.js":
/*!*************************************!*\
  !*** ./src/modules/buildContent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildContent)
/* harmony export */ });
/* harmony import */ var _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/cloudy.svg */ "./assets/cloudy.svg");
/* harmony import */ var _assets_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/partly-cloudy.svg */ "./assets/partly-cloudy.svg");
/* harmony import */ var _assets_rainy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/rainy.svg */ "./assets/rainy.svg");
/* harmony import */ var _assets_sunny_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/sunny.svg */ "./assets/sunny.svg");





// import fromUnixTime from 'date-fns/fromUnixTime'
// import format from 'date-fns/format'
// import parseISO from 'date-fns/parseISO'


function buildContent(myData) {
    const { temp, feelslike, description, humidity, sunrise, sunset } = myData

    const icon = document.getElementById('weather-icon')
    if(description === "cloudy" || description === "scattered clouds"){
        
        icon.src = _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_0__
    }
    if(description === "rainy" || description === "light rain"){
        
        icon.src = _assets_rainy_svg__WEBPACK_IMPORTED_MODULE_2__
    }
    if(description === "sunny" || description === "clear sky"){
        
        icon.src = _assets_sunny_svg__WEBPACK_IMPORTED_MODULE_3__
    }
    else {
        icon.src = _assets_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__
    }

    const tempSpan = document.getElementById('temp')
    tempSpan.textContent = temp

    const feelsLikeSpan = document.getElementById('feels-like')
    feelsLikeSpan.textContent = `Feels Like: ${feelslike}`
        
    const descriptionh4 = document.getElementById('description')
    descriptionh4.textContent = description
    

    const humidityh4 = document.getElementById('humidity')
    humidityh4.textContent = `Humidity: ${humidity} %`

//     const sunriseSpan = document.getElementById('sunrise')
//     // console.log(format(parseISO(fromUnixTime(sunrise)), 'p'));

//     sunriseSpan.textContent = ` ${fromUnixTime(sunrise).toUTCString().split(' ')[4]}`

//     const sunsetSpan = document.getElementById('sunset')
//     sunsetSpan.textContent = ` ${fromUnixTime(sunset).toUTCString().split(' ')[4]}`
}



/***/ }),

/***/ "./src/modules/buildHourlyContent.js":
/*!*******************************************!*\
  !*** ./src/modules/buildHourlyContent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHourlyContent)
/* harmony export */ });

function buildHourlyContent(myData) {
    const { unixtime, UTCTime,  temp, feelslike, description, humidity, sunrise, sunset } = myData
    console.log(description);
    
    const hourlyBlock = document.createElement('div')
    hourlyBlock.classList.add('hourly-block')

    const timeP = document.createElement('p')
    timeP.textContent = UTCTime
    const tempP = document.createElement('p')
    tempP.textContent = `Temp: ${temp}`
    const feelslikeP = document.createElement('p')
    feelslikeP.textContent = `Feels Like: ${feelslike}`
    const descriptionP = document.createElement('p')
    descriptionP.textContent = description

    hourlyBlock.appendChild(timeP)
    hourlyBlock.appendChild(tempP)
    hourlyBlock.appendChild(feelslikeP)
    hourlyBlock.appendChild(descriptionP)
   
    return hourlyBlock

}



/***/ }),

/***/ "./src/modules/dataProcess.js":
/*!************************************!*\
  !*** ./src/modules/dataProcess.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dataProcess)
/* harmony export */ });


function dataProcess(data){

    const myData = {
        'temp' : data.main.temp,
        'feelslike' : data.main.feels_like,
        'description' : data.weather[0].description,
        'humidity' : data.main.humidity,
        'sunrise' : data.sys.sunrise,
        'sunset' : data.sys.sunset,
    }
    return myData
}

/***/ }),

/***/ "./src/modules/get5day3HourlyWeather.js":
/*!**********************************************!*\
  !*** ./src/modules/get5day3HourlyWeather.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ get5day3HourlyWeather)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _hourlyDataProcess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourlyDataProcess */ "./src/modules/hourlyDataProcess.js");
/* harmony import */ var _buildHourlyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildHourlyContent */ "./src/modules/buildHourlyContent.js");





async function get5day3HourlyWeather(lat,lon){
    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${_index__WEBPACK_IMPORTED_MODULE_0__.APIKEY}&units=imperial`)
        const data = await response.json()

        // this will give us the first 3 items of the array(that is 3 3-hour blocks) and for each block we will need to process and build some html
        const threeHourly = data.list.slice(0,3)
        // console.log(threeHourly);
        threeHourly.forEach(block => {

           const hourlyContent = document.querySelector('.hourly-content')
           hourlyContent.appendChild((0,_buildHourlyContent__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_hourlyDataProcess__WEBPACK_IMPORTED_MODULE_1__["default"])(block)))
        })

    }catch(error){
        console.log(error)
        
    }
}

/***/ }),

/***/ "./src/modules/getCoords.js":
/*!**********************************!*\
  !*** ./src/modules/getCoords.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCoords)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _getCurrentWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentWeather */ "./src/modules/getCurrentWeather.js");
/* harmony import */ var _get5day3HourlyWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get5day3HourlyWeather */ "./src/modules/get5day3HourlyWeather.js");




async function getCoords(cityname, statecode, countrycode){
    try {

        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname},${statecode},${countrycode}&limit=1&appid=${_index__WEBPACK_IMPORTED_MODULE_0__.APIKEY}`)
    
        const data = await response.json()
    
        const { lat, lon } = data[0]
        

        ;(0,_getCurrentWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(lat,lon)
        ;(0,_get5day3HourlyWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(lat,lon)
       
        

    }catch(error){

        console.log(error);
    }
}


/***/ }),

/***/ "./src/modules/getCurrentWeather.js":
/*!******************************************!*\
  !*** ./src/modules/getCurrentWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCurrentWeather)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _buildContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildContent */ "./src/modules/buildContent.js");
/* harmony import */ var _dataProcess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataProcess */ "./src/modules/dataProcess.js");





async function getCurrentWeather(lat, lon){
    try{
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${_index__WEBPACK_IMPORTED_MODULE_0__.APIKEY}&units=imperial `)
        const weather = await res.json()
        
        ;(0,_buildContent__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_dataProcess__WEBPACK_IMPORTED_MODULE_2__["default"])(weather))

    }catch(error){
        console.log(error);
    }
}

/***/ }),

/***/ "./src/modules/hourlyDataProcess.js":
/*!******************************************!*\
  !*** ./src/modules/hourlyDataProcess.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hourlyDataProcess)
/* harmony export */ });

function hourlyDataProcess(data){
    console.log(data);

    const myData = {
        "UTCTime": data.dt_txt,
        "unixTime": data.dt,
        'temp' : data.main.temp,
        'feelslike' : data.main.feels_like,
        'description' : data.weather[0].description,
        'humidity' : data.main.humidity,
        
    }
    return myData
}

/***/ }),

/***/ "./assets/cloudy.svg":
/*!***************************!*\
  !*** ./assets/cloudy.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c31164bf080ce2871f0.svg";

/***/ }),

/***/ "./assets/laurel-balyeat-ExarETx4xNA-unsplash.jpg":
/*!********************************************************!*\
  !*** ./assets/laurel-balyeat-ExarETx4xNA-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2afb1325da1b92e1b70.jpg";

/***/ }),

/***/ "./assets/logo.jpeg":
/*!**************************!*\
  !*** ./assets/logo.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b4b12f0cd38a68c6016.jpeg";

/***/ }),

/***/ "./assets/partly-cloudy.svg":
/*!**********************************!*\
  !*** ./assets/partly-cloudy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a98d0a1e007efc761a7.svg";

/***/ }),

/***/ "./assets/rainy.svg":
/*!**************************!*\
  !*** ./assets/rainy.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9e5c448192323e4986a.svg";

/***/ }),

/***/ "./assets/sunny.svg":
/*!**************************!*\
  !*** ./assets/sunny.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e43bbde3c7d6dd237e93.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2J1aWxkQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2J1aWxkSG91cmx5Q29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RhdGFQcm9jZXNzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZ2V0NWRheTNIb3VybHlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZ2V0Q29vcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZ2V0Q3VycmVudFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9ob3VybHlEYXRhUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2xhdXJlbC1iYWx5ZWF0LUV4YXJFVHg0eE5BLXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgXFxufVxcbmhlYWRlcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcikgMmZyIHJlcGVhdCgyLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuI2xvZ297XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICB3aWR0aDogMjUwcHg7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwLjk7XFxuXFxufVxcbmZvcm17XFxuICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jb250ZW50e1xcbiAgZGlzcGxheTpncmlkO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA5cmVtKTtcXG4gIFxcbn1cXG4uY29udGVudD4qe1xcbiAgY29sb3I6IGJsYWNrXFxuICBcXG59XFxuI3RvZGF5LXRpdGxle1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcblxcbn1cXG4udG9kYXl7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kYXkgPiAqe1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kYXkgPiBidXR0b24ge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiN3ZWF0aGVyLWljb257XFxuICB3aWR0aDogN3JlbTtcXG4gIGdyaWQtYXJlYTogMS8xLzMvMjtcXG59XFxuXFxuI3RlbXB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBncmlkLWFyZWE6IDEvMi80LzM7XFxufVxcblxcbiNmZWVscy1saWtle1xcbiAgZ3JpZC1hcmVhOiAxLzMvMi80O1xcbn1cXG5cXG4jZGVzY3JpcHRpb257XFxuICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcblxcbiNodW1pZGl0eXtcXG4gIGdyaWQtYXJlYTogMi8zLzMvNDtcXG59XFxuXFxuLnN3aXRjaHtcXG4gIGdyaWQtYXJlYTogMy8zLzQvNDtcXG59XFxuXFxuI2hvdXJseS10aXRsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhvdXJseS1jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgXFxufVxcbi5ob3VybHktYmxvY2t7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gIH1cXG4gIFxcbiAgLnN3aXRjaCBpbnB1dCB7IFxcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlEQUF3RTs7QUFFMUU7QUFDQTtFQUNFLGFBQWE7RUFDYixzREFBc0Q7RUFDdEQsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7O0FBRWpDO0FBQ0E7RUFDRTs7QUFFRjtBQUNBO0VBQ0Usa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7O0VBRWIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1Qjs7QUFFekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCO0VBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2xhdXJlbC1iYWx5ZWF0LUV4YXJFVHg0eE5BLXVuc3BsYXNoLmpwZyk7XFxuICBcXG59XFxuaGVhZGVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKSAyZnIgcmVwZWF0KDIsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG4jbG9nb3tcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDAuOTtcXG5cXG59XFxuZm9ybXtcXG4gIGdyaWQtYXJlYTogMS8zLzIvNDtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmNvbnRlbnR7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDlyZW0pO1xcbiAgXFxufVxcbi5jb250ZW50Pip7XFxuICBjb2xvcjogYmxhY2tcXG4gIFxcbn1cXG4jdG9kYXktdGl0bGV7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFxufVxcbi50b2RheXtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RheSA+ICp7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RheSA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuI3dlYXRoZXItaWNvbntcXG4gIHdpZHRoOiA3cmVtO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xcbn1cXG5cXG4jdGVtcHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGdyaWQtYXJlYTogMS8yLzQvMztcXG59XFxuXFxuI2ZlZWxzLWxpa2V7XFxuICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcblxcbiNkZXNjcmlwdGlvbntcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuXFxuI2h1bWlkaXR5e1xcbiAgZ3JpZC1hcmVhOiAyLzMvMy80O1xcbn1cXG5cXG4uc3dpdGNoe1xcbiAgZ3JpZC1hcmVhOiAzLzMvNC80O1xcbn1cXG5cXG4jaG91cmx5LXRpdGxle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaG91cmx5LWNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBcXG59XFxuLmhvdXJseS1ibG9ja3tcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgfVxcbiAgXFxuICAuc3dpdGNoIGlucHV0IHsgXFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBMb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvLmpwZWcnXG5pbXBvcnQgZ2V0Q29vcmRzIGZyb20gJy4vbW9kdWxlcy9nZXRDb29yZHMnXG5cbmV4cG9ydCBjb25zdCBBUElLRVkgPSAnNmEwNTY1MTEwMmM5NGRlNjFlM2Y3Y2YyZTQ2YTEzMzgnXG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpXG5sb2dvLnNyYyA9IExvZ29cblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGJ0bicpXG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGhvdXJseUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWNvbnRlbnQnKVxuICAgIGhvdXJseUNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKClcbiAgICBcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS52YWx1ZVxuICAgIGxldCBsb2NhdGlvbiA9IGlucHV0LnNwbGl0KCcsICcpXG4gICAgbGV0IGNpdHluYW1lID0gbG9jYXRpb25bMF1cbiAgICBsZXQgc3RhdGVjb2RlID0gbG9jYXRpb25bMV1cbiAgICBsZXQgY291bnRyeWNvZGUgPSBsb2NhdGlvblsyXVxuICAgIFxuICAgIGdldENvb3JkcyhjaXR5bmFtZSwgc3RhdGVjb2RlLCBjb3VudHJ5Y29kZSlcbn0pXG5cbmdldENvb3JkcygnQ29vcGVyc3Rvd24nLCAnTlknLCAnVVNBJykiLCJpbXBvcnQgQ2xvdWR5IGZyb20gJy4uLy4uL2Fzc2V0cy9jbG91ZHkuc3ZnJ1xuaW1wb3J0IFBhcnRseUNsb3VkeSBmcm9tICcuLi8uLi9hc3NldHMvcGFydGx5LWNsb3VkeS5zdmcnXG5pbXBvcnQgUmFpbnkgZnJvbSAnLi4vLi4vYXNzZXRzL3JhaW55LnN2ZydcbmltcG9ydCBTdW5ueSBmcm9tICcuLi8uLi9hc3NldHMvc3Vubnkuc3ZnJ1xuXG4vLyBpbXBvcnQgZnJvbVVuaXhUaW1lIGZyb20gJ2RhdGUtZm5zL2Zyb21Vbml4VGltZSdcbi8vIGltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xuLy8gaW1wb3J0IHBhcnNlSVNPIGZyb20gJ2RhdGUtZm5zL3BhcnNlSVNPJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQ29udGVudChteURhdGEpIHtcbiAgICBjb25zdCB7IHRlbXAsIGZlZWxzbGlrZSwgZGVzY3JpcHRpb24sIGh1bWlkaXR5LCBzdW5yaXNlLCBzdW5zZXQgfSA9IG15RGF0YVxuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWljb24nKVxuICAgIGlmKGRlc2NyaXB0aW9uID09PSBcImNsb3VkeVwiIHx8IGRlc2NyaXB0aW9uID09PSBcInNjYXR0ZXJlZCBjbG91ZHNcIil7XG4gICAgICAgIFxuICAgICAgICBpY29uLnNyYyA9IENsb3VkeVxuICAgIH1cbiAgICBpZihkZXNjcmlwdGlvbiA9PT0gXCJyYWlueVwiIHx8IGRlc2NyaXB0aW9uID09PSBcImxpZ2h0IHJhaW5cIil7XG4gICAgICAgIFxuICAgICAgICBpY29uLnNyYyA9IFJhaW55XG4gICAgfVxuICAgIGlmKGRlc2NyaXB0aW9uID09PSBcInN1bm55XCIgfHwgZGVzY3JpcHRpb24gPT09IFwiY2xlYXIgc2t5XCIpe1xuICAgICAgICBcbiAgICAgICAgaWNvbi5zcmMgPSBTdW5ueVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWNvbi5zcmMgPSBQYXJ0bHlDbG91ZHlcbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJylcbiAgICB0ZW1wU3Bhbi50ZXh0Q29udGVudCA9IHRlbXBcblxuICAgIGNvbnN0IGZlZWxzTGlrZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMtbGlrZScpXG4gICAgZmVlbHNMaWtlU3Bhbi50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZlZWxzbGlrZX1gXG4gICAgICAgIFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uaDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uaDQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuICAgIFxuXG4gICAgY29uc3QgaHVtaWRpdHloNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpXG4gICAgaHVtaWRpdHloNC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eX0gJWBcblxuLy8gICAgIGNvbnN0IHN1bnJpc2VTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bnJpc2UnKVxuLy8gICAgIC8vIGNvbnNvbGUubG9nKGZvcm1hdChwYXJzZUlTTyhmcm9tVW5peFRpbWUoc3VucmlzZSkpLCAncCcpKTtcblxuLy8gICAgIHN1bnJpc2VTcGFuLnRleHRDb250ZW50ID0gYCAke2Zyb21Vbml4VGltZShzdW5yaXNlKS50b1VUQ1N0cmluZygpLnNwbGl0KCcgJylbNF19YFxuXG4vLyAgICAgY29uc3Qgc3Vuc2V0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW5zZXQnKVxuLy8gICAgIHN1bnNldFNwYW4udGV4dENvbnRlbnQgPSBgICR7ZnJvbVVuaXhUaW1lKHN1bnNldCkudG9VVENTdHJpbmcoKS5zcGxpdCgnICcpWzRdfWBcbn1cblxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvdXJseUNvbnRlbnQobXlEYXRhKSB7XG4gICAgY29uc3QgeyB1bml4dGltZSwgVVRDVGltZSwgIHRlbXAsIGZlZWxzbGlrZSwgZGVzY3JpcHRpb24sIGh1bWlkaXR5LCBzdW5yaXNlLCBzdW5zZXQgfSA9IG15RGF0YVxuICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uKTtcbiAgICBcbiAgICBjb25zdCBob3VybHlCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG91cmx5QmxvY2suY2xhc3NMaXN0LmFkZCgnaG91cmx5LWJsb2NrJylcblxuICAgIGNvbnN0IHRpbWVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGltZVAudGV4dENvbnRlbnQgPSBVVENUaW1lXG4gICAgY29uc3QgdGVtcFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0ZW1wUC50ZXh0Q29udGVudCA9IGBUZW1wOiAke3RlbXB9YFxuICAgIGNvbnN0IGZlZWxzbGlrZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBmZWVsc2xpa2VQLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZmVlbHNsaWtlfWBcbiAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjcmlwdGlvblAudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuXG4gICAgaG91cmx5QmxvY2suYXBwZW5kQ2hpbGQodGltZVApXG4gICAgaG91cmx5QmxvY2suYXBwZW5kQ2hpbGQodGVtcFApXG4gICAgaG91cmx5QmxvY2suYXBwZW5kQ2hpbGQoZmVlbHNsaWtlUClcbiAgICBob3VybHlCbG9jay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblApXG4gICBcbiAgICByZXR1cm4gaG91cmx5QmxvY2tcblxufVxuXG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0YVByb2Nlc3MoZGF0YSl7XG5cbiAgICBjb25zdCBteURhdGEgPSB7XG4gICAgICAgICd0ZW1wJyA6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgICAnZmVlbHNsaWtlJyA6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgICAnZGVzY3JpcHRpb24nIDogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICAnaHVtaWRpdHknIDogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgICAnc3VucmlzZScgOiBkYXRhLnN5cy5zdW5yaXNlLFxuICAgICAgICAnc3Vuc2V0JyA6IGRhdGEuc3lzLnN1bnNldCxcbiAgICB9XG4gICAgcmV0dXJuIG15RGF0YVxufSIsImltcG9ydCB7IEFQSUtFWSB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IGZyb21Vbml4VGltZSBmcm9tICdkYXRlLWZucy9mcm9tVW5peFRpbWUnXG5pbXBvcnQgaG91cmx5RGF0YVByb2Nlc3MgZnJvbSBcIi4vaG91cmx5RGF0YVByb2Nlc3NcIjtcbmltcG9ydCBidWlsZEhvdXJseUNvbnRlbnQgZnJvbSBcIi4vYnVpbGRIb3VybHlDb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldDVkYXkzSG91cmx5V2VhdGhlcihsYXQsbG9uKXtcbiAgICB0cnl7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke0FQSUtFWX0mdW5pdHM9aW1wZXJpYWxgKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICAgICAgLy8gdGhpcyB3aWxsIGdpdmUgdXMgdGhlIGZpcnN0IDMgaXRlbXMgb2YgdGhlIGFycmF5KHRoYXQgaXMgMyAzLWhvdXIgYmxvY2tzKSBhbmQgZm9yIGVhY2ggYmxvY2sgd2Ugd2lsbCBuZWVkIHRvIHByb2Nlc3MgYW5kIGJ1aWxkIHNvbWUgaHRtbFxuICAgICAgICBjb25zdCB0aHJlZUhvdXJseSA9IGRhdGEubGlzdC5zbGljZSgwLDMpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRocmVlSG91cmx5KTtcbiAgICAgICAgdGhyZWVIb3VybHkuZm9yRWFjaChibG9jayA9PiB7XG5cbiAgICAgICAgICAgY29uc3QgaG91cmx5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktY29udGVudCcpXG4gICAgICAgICAgIGhvdXJseUNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIb3VybHlDb250ZW50KGhvdXJseURhdGFQcm9jZXNzKGJsb2NrKSkpXG4gICAgICAgIH0pXG5cbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IEFQSUtFWSB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IGdldEN1cnJlbnRXZWF0aGVyIGZyb20gXCIuL2dldEN1cnJlbnRXZWF0aGVyXCI7XG5pbXBvcnQgZ2V0NWRheTNIb3VybHlXZWF0aGVyIGZyb20gXCIuL2dldDVkYXkzSG91cmx5V2VhdGhlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHMoY2l0eW5hbWUsIHN0YXRlY29kZSwgY291bnRyeWNvZGUpe1xuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHluYW1lfSwke3N0YXRlY29kZX0sJHtjb3VudHJ5Y29kZX0mbGltaXQ9MSZhcHBpZD0ke0FQSUtFWX1gKVxuICAgIFxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGRhdGFbMF1cbiAgICAgICAgXG5cbiAgICAgICAgZ2V0Q3VycmVudFdlYXRoZXIobGF0LGxvbilcbiAgICAgICAgZ2V0NWRheTNIb3VybHlXZWF0aGVyKGxhdCxsb24pXG4gICAgICAgXG4gICAgICAgIFxuXG4gICAgfWNhdGNoKGVycm9yKXtcblxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQVBJS0VZIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgYnVpbGRDb250ZW50IGZyb20gXCIuL2J1aWxkQ29udGVudFwiO1xuaW1wb3J0IGRhdGFQcm9jZXNzIGZyb20gXCIuL2RhdGFQcm9jZXNzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIobGF0LCBsb24pe1xuICAgIHRyeXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtBUElLRVl9JnVuaXRzPWltcGVyaWFsIGApXG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIFxuICAgICAgICBidWlsZENvbnRlbnQoZGF0YVByb2Nlc3Mod2VhdGhlcikpXG5cbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG91cmx5RGF0YVByb2Nlc3MoZGF0YSl7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBjb25zdCBteURhdGEgPSB7XG4gICAgICAgIFwiVVRDVGltZVwiOiBkYXRhLmR0X3R4dCxcbiAgICAgICAgXCJ1bml4VGltZVwiOiBkYXRhLmR0LFxuICAgICAgICAndGVtcCcgOiBkYXRhLm1haW4udGVtcCxcbiAgICAgICAgJ2ZlZWxzbGlrZScgOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyA6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgJ2h1bWlkaXR5JyA6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgICAgXG4gICAgfVxuICAgIHJldHVybiBteURhdGFcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=