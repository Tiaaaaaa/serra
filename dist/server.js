/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./server/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./client/src/common/style.js":
      /*!************************************!*\
  !*** ./client/src/common/style.js ***!
  \************************************/
      /*! exports provided: WindowsContainer, Window, WindowTitle, Body, Image, Button, EmptyButton, Data, Description, TextContainer, ButtonContainer, Color */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsContainer", function() { return WindowsContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowTitle", function() { return WindowTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyButton", function() { return EmptyButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextContainer", function() { return TextContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar WindowsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: "style__WindowsContainer",\n  componentId: "e617v-0"\n})(["display:flex;flex-flow:row wrap;justify-content:space-around;z-index:2;@media all and (max-width:800px){flex-direction:column;}"]);\nvar Window = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: "style__Window",\n  componentId: "e617v-1"\n})(["display:flex;justify-content:center;padding:1em;margin:0.5em;border-radius:1rem;box-shadow:0 0.375em 0.65em 0.1625em rgba(0,0,0,0.2);z-index:3;background-color:white;flex-direction:column;"]);\nvar WindowTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: "style__WindowTitle",\n  componentId: "e617v-2"\n})(["font-family:helvetica;font-size:1.3em;font-weight:bold;"]);\nvar Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: "style__Body",\n  componentId: "e617v-3"\n})(["display:flex;padding:1em 0;"]);\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "style__Image",\n  componentId: "e617v-4"\n})(["font-size:4em;"]);\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: "style__Button",\n  componentId: "e617v-5"\n})(["color:rgb(51,51,51);font-weight:300;font-family:helvetica;border:none;border-radius:0.4em;font-size:1rem;margin:0 0.1em;flex:1;box-shadow:0 0.375rem 0.65rem 0.1625rem rgba(0,0,0,0.31);background-color:rgb(255,255,255);"]);\nvar EmptyButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "style__EmptyButton",\n  componentId: "e617v-6"\n})(["font-size:1rem;margin:0 0.1em;flex:1;"]);\nvar Data = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({\n  displayName: "style__Data",\n  componentId: "e617v-7"\n})(["font-size:1em;font-family:helvetica;"]);\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({\n  displayName: "style__Description",\n  componentId: "e617v-8"\n})(["font-size:1em;font-family:helvetica;"]);\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: "style__TextContainer",\n  componentId: "e617v-9"\n})(["display:flex;justify-content:center;flex-flow:column;margin-left:0.4em;"]);\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "style__ButtonContainer",\n  componentId: "e617v-10"\n})(["display:flex;"]);\nvar Color = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "style__Color",\n  componentId: "e617v-11"\n})(["background-color:#ffffff;background-image:linear-gradient(0deg,#ffffff 36%,#f3fdf3 100%);"]);\n\n//# sourceURL=webpack:///./client/src/common/style.js?'
        );

        /***/
      },

    /***/ "./client/src/components/air_humidity/index.js":
      /*!*****************************************************!*\
  !*** ./client/src/components/air_humidity/index.js ***!
  \*****************************************************/
      /*! exports provided: AirHumidity */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirHumidity", function() { return AirHumidity; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/style */ "./client/src/common/style.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar AirHumidity = function AirHumidity() {\n  var groundHumidity = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {\n    return state.groundHumidity;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Window"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["WindowTitle"], null, "Umidit\\xE0 dell\'aria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Body"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Image"], null, "\\uD83C\\uDF2B\\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Data"], null, groundHumidity, "%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["EmptyButton"], null));\n};\n\n//# sourceURL=webpack:///./client/src/components/air_humidity/index.js?'
        );

        /***/
      },

    /***/ "./client/src/components/air_humidity/reducers.js":
      /*!********************************************************!*\
  !*** ./client/src/components/air_humidity/reducers.js ***!
  \********************************************************/
      /*! exports provided: AIR_HUMIDITY */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIR_HUMIDITY", function() { return AIR_HUMIDITY; });\nvar AIR_HUMIDITY = function AIR_HUMIDITY() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case "CHANGE_AIR_HUMIDITY":\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/src/components/air_humidity/reducers.js?'
        );

        /***/
      },

    /***/ "./client/src/components/ground_humidity/index.js":
      /*!********************************************************!*\
  !*** ./client/src/components/ground_humidity/index.js ***!
  \********************************************************/
      /*! exports provided: GroundHumidity */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundHumidity", function() { return GroundHumidity; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/style */ "./client/src/common/style.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar GroundHumidity = function GroundHumidity() {\n  var groundHumidity = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {\n    return state.groundHumidity;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Window"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["WindowTitle"], null, "Umidit\\xE0 del terreno"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Body"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Image"], null, "\\uD83C\\uDF2B\\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Data"], null, groundHumidity, "%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["EmptyButton"], null));\n};\n\n//# sourceURL=webpack:///./client/src/components/ground_humidity/index.js?'
        );

        /***/
      },

    /***/ "./client/src/components/ground_humidity/reducers.js":
      /*!***********************************************************!*\
  !*** ./client/src/components/ground_humidity/reducers.js ***!
  \***********************************************************/
      /*! exports provided: GROUND_HUMIDITY */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUND_HUMIDITY", function() { return GROUND_HUMIDITY; });\nvar GROUND_HUMIDITY = function GROUND_HUMIDITY() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case "CHANGE_GROUND_HUMIDITY":\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/src/components/ground_humidity/reducers.js?'
        );

        /***/
      },

    /***/ "./client/src/components/luminance/actions.js":
      /*!****************************************************!*\
  !*** ./client/src/components/luminance/actions.js ***!
  \****************************************************/
      /*! exports provided: CHANGE_STATE */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_STATE", function() { return CHANGE_STATE; });\nvar CHANGE_STATE = function CHANGE_STATE() {\n  return {\n    type: "CHANGE_STATE"\n  };\n};\n\n//# sourceURL=webpack:///./client/src/components/luminance/actions.js?'
        );

        /***/
      },

    /***/ "./client/src/components/luminance/index.js":
      /*!**************************************************!*\
  !*** ./client/src/components/luminance/index.js ***!
  \**************************************************/
      /*! exports provided: Luminance */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Luminance", function() { return Luminance; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/style */ "./client/src/common/style.js");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./client/src/components/luminance/style.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./client/src/components/luminance/actions.js");\n\n\n\n\n\n\nvar Luminance = function Luminance() {\n  var luminance = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {\n    return state.luminance;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Window"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["WindowTitle"], null, "Luminosit\\xE0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Body"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Image"], null, luminance ? "💡" : "🌞"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Description"], null, luminance ? "Artificiale" : "Naturale"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["ButtonContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Button"], {\n    onClick: function onClick() {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["CHANGE_STATE"])());\n    }\n  }, "Cambia")));\n};\n\n//# sourceURL=webpack:///./client/src/components/luminance/index.js?'
        );

        /***/
      },

    /***/ "./client/src/components/luminance/reducers.js":
      /*!*****************************************************!*\
  !*** ./client/src/components/luminance/reducers.js ***!
  \*****************************************************/
      /*! exports provided: LUMINANCE */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LUMINANCE", function() { return LUMINANCE; });\nvar LUMINANCE = function LUMINANCE() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case "CHANGE_STATE":\n      return !state;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/src/components/luminance/reducers.js?'
        );

        /***/
      },

    /***/ "./client/src/components/luminance/style.js":
      /*!**************************************************!*\
  !*** ./client/src/components/luminance/style.js ***!
  \**************************************************/
      /*! exports provided: Window, Button */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Window = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: "style__Window",\n  componentId: "sc-13q2itz-0"\n})(["display:flex;justify-content:center;padding:1em;margin:0.5em;border-radius:1rem;box-shadow:0 0.375em 0.65em 0.1625em rgba(0,0,0,0.2);min-width:20%;flex-direction:column;transition:all 0.2s;"]);\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: "style__Button",\n  componentId: "sc-13q2itz-1"\n})(["font-weight:300;font-family:helvetica;border:none;border-radius:0.4em;font-size:0.9rem;margin:0 0.1em;flex:1;box-shadow:0 0.375rem 0.65rem 0.1625rem rgba(0,0,0,0.31);transition:all 0.2s;"]);\n\n//# sourceURL=webpack:///./client/src/components/luminance/style.js?'
        );

        /***/
      },

    /***/ "./client/src/components/state_of_plant/index.js":
      /*!*******************************************************!*\
  !*** ./client/src/components/state_of_plant/index.js ***!
  \*******************************************************/
      /*! exports provided: StateOfPlant */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateOfPlant", function() { return StateOfPlant; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/src/components/state_of_plant/style.js");\n\n\n\n\nvar returnState = function returnState() {\n  return "bene";\n};\n\nvar StateOfPlant = function StateOfPlant() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Title"], null, "La tua \\uD83C\\uDF31 si sente ", returnState()));\n};\n\n//# sourceURL=webpack:///./client/src/components/state_of_plant/index.js?'
        );

        /***/
      },

    /***/ "./client/src/components/state_of_plant/style.js":
      /*!*******************************************************!*\
  !*** ./client/src/components/state_of_plant/style.js ***!
  \*******************************************************/
      /*! exports provided: Title, Container */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: "style__Title",\n  componentId: "sc-1wemm64-0"\n})(["font-family:helvetica;font-weight:bold;font-size:2em;background-color:#f4d03f;background-image:linear-gradient(132deg,#f4d03f 0%,#16a085 100%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;"]);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: "style__Container",\n  componentId: "sc-1wemm64-1"\n})(["display:flex;justify-content:center;padding:1.5em 0;"]);\n\n//# sourceURL=webpack:///./client/src/components/state_of_plant/style.js?'
        );

        /***/
      },

    /***/ "./client/src/components/temperature/index.js":
      /*!****************************************************!*\
  !*** ./client/src/components/temperature/index.js ***!
  \****************************************************/
      /*! exports provided: Temperature */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return Temperature; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/style */ "./client/src/common/style.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar Temperature = function Temperature() {\n  var temperature = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {\n    return state.temperature;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Window"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["WindowTitle"], null, "Temperatura"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Body"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Image"], null, "\\uD83C\\uDF21\\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Data"], null, temperature, " \\xB0C"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["EmptyButton"], null));\n};\n\n//# sourceURL=webpack:///./client/src/components/temperature/index.js?'
        );

        /***/
      },

    /***/ "./client/src/components/temperature/reducers.js":
      /*!*******************************************************!*\
  !*** ./client/src/components/temperature/reducers.js ***!
  \*******************************************************/
      /*! exports provided: TEMPERATURE */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPERATURE", function() { return TEMPERATURE; });\nvar TEMPERATURE = function TEMPERATURE() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case "CHANGE_TEMPERATURE":\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/src/components/temperature/reducers.js?'
        );

        /***/
      },

    /***/ "./client/src/components/water/actions.js":
      /*!************************************************!*\
  !*** ./client/src/components/water/actions.js ***!
  \************************************************/
      /*! exports provided: ADD_WATER */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_WATER", function() { return ADD_WATER; });\nvar ADD_WATER = function ADD_WATER() {\n  return {\n    type: "ADD_WATER",\n    payload: 1000\n  };\n};\n\n//# sourceURL=webpack:///./client/src/components/water/actions.js?'
        );

        /***/
      },

    /***/ "./client/src/components/water/index.js":
      /*!**********************************************!*\
  !*** ./client/src/components/water/index.js ***!
  \**********************************************/
      /*! exports provided: Water */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Water", function() { return Water; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/style */ "./client/src/common/style.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./client/src/components/water/actions.js");\n\n\n\n\n\nvar Water = function Water(props) {\n  var water = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {\n    return state.water;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Window"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["WindowTitle"], null, "Acqua"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Body"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Image"], null, "\\uD83D\\uDCA7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Data"], null, water, " ml"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {\n    onClick: function onClick() {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_WATER"])());\n    }\n  }, "+"));\n};\n\n//# sourceURL=webpack:///./client/src/components/water/index.js?'
        );

        /***/
      },

    /***/ "./client/src/components/water/reducers.js":
      /*!*************************************************!*\
  !*** ./client/src/components/water/reducers.js ***!
  \*************************************************/
      /*! exports provided: WATER */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATER", function() { return WATER; });\nvar WATER = function WATER() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case "ADD_WATER":\n      return state + action.payload;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/src/components/water/reducers.js?'
        );

        /***/
      },

    /***/ "./client/src/html.js":
      /*!****************************!*\
  !*** ./client/src/html.js ***!
  \****************************/
      /*! exports provided: html */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });\nvar html = function html(_ref) {\n  var store = _ref.store,\n      content = _ref.content,\n      styles = _ref.styles;\n  return "\\n<!DOCTYPE html>\\n\\n<head>\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\">\\n    <link rel=\\"shortcut icon\\" href=\\"favicon.ico\\">\\n    <title>serra</title>\\n    <meta name=\\"description\\" content=\\"\\">\\n    <meta name=\\"robots\\" content=\\"index, follow\\">\\n    <link href=\\"URL\\" rel=\\"canonical\\">\\n    <style type=\\"text/css\\">\\n        html,\\n        body,\\n        div,\\n        span,\\n        applet,\\n        object,\\n        iframe,\\n        h1,\\n        h2,\\n        h3,\\n        h4,\\n        h5,\\n        h6,\\n        p,\\n        blockquote,\\n        pre,\\n        a,\\n        abbr,\\n        acronym,\\n        address,\\n        big,\\n        cite,\\n        code,\\n        del,\\n        dfn,\\n        em,\\n        img,\\n        ins,\\n        kbd,\\n        q,\\n        s,\\n        samp,\\n        small,\\n        strike,\\n        strong,\\n        sub,\\n        sup,\\n        tt,\\n        var,\\n        b,\\n        u,\\n        i,\\n        center,\\n        dl,\\n        dt,\\n        dd,\\n        ol,\\n        ul,\\n        li,\\n        fieldset,\\n        form,\\n        label,\\n        legend,\\n        table,\\n        caption,\\n        tbody,\\n        tfoot,\\n        thead,\\n        tr,\\n        th,\\n        td,\\n        article,\\n        aside,\\n        canvas,\\n        details,\\n        embed,\\n        figure,\\n        figcaption,\\n        footer,\\n        header,\\n        hgroup,\\n        menu,\\n        nav,\\n        output,\\n        ruby,\\n        section,\\n        summary,\\n        time,\\n        mark,\\n        audio,\\n        video {\\n            margin: 0;\\n            padding: 0;\\n            border: 0;\\n            font-size: 100%;\\n            font: inherit;\\n            vertical-align: baseline;\\n        }\\n        /* make sure to set some focus styles for accessibility */\\n\\n        :focus {\\n            outline: 0;\\n        }\\n        /* HTML5 display-role reset for older browsers */\\n\\n        article,\\n        aside,\\n        details,\\n        figcaption,\\n        figure,\\n        footer,\\n        header,\\n        hgroup,\\n        menu,\\n        nav,\\n        section {\\n            display: block;\\n        }\\n\\n        body {\\n            line-height: 1;\\n        }\\n\\n        ol,\\n        ul {\\n            list-style: none;\\n        }\\n\\n        blockquote,\\n        q {\\n            quotes: none;\\n        }\\n\\n        blockquote:before,\\n        blockquote:after,\\n        q:before,\\n        q:after {\\n            content: \'\';\\n            content: none;\\n        }\\n\\n        table {\\n            border-collapse: collapse;\\n            border-spacing: 0;\\n        }\\n\\n        input[type=search]::-webkit-search-cancel-button,\\n        input[type=search]::-webkit-search-decoration,\\n        input[type=search]::-webkit-search-results-button,\\n        input[type=search]::-webkit-search-results-decoration {\\n            -webkit-appearance: none;\\n            -moz-appearance: none;\\n        }\\n\\n        input[type=search] {\\n            -webkit-appearance: none;\\n            -moz-appearance: none;\\n            -webkit-box-sizing: content-box;\\n            -moz-box-sizing: content-box;\\n            box-sizing: content-box;\\n        }\\n\\n        textarea {\\n            overflow: auto;\\n            vertical-align: top;\\n            resize: vertical;\\n        }\\n        /**\\n * Correct inline-block display not defined in IE 6/7/8/9 and Firefox 3.\\n */\\n\\n        audio,\\n        canvas,\\n        video {\\n            display: inline-block;\\n            *display: inline;\\n            *zoom: 1;\\n            max-width: 100%;\\n        }\\n        /**\\n * Prevent modern browsers from displaying audio without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\n\\n        audio:not([controls]) {\\n            display: none;\\n            height: 0;\\n        }\\n        /**\\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\\n * Known issue: no IE 6 support.\\n */\\n\\n        [hidden] {\\n            display: none;\\n        }\\n        /**\\n * 1. Correct text resizing oddly in IE 6/7 when body font-size is set using\\n *    em units.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\n\\n        html {\\n            font-size: 100%;\\n            /* 1 */\\n            -webkit-text-size-adjust: 100%;\\n            /* 2 */\\n            -ms-text-size-adjust: 100%;\\n            /* 2 */\\n        }\\n        /**\\n * Address outline inconsistency between Chrome and other browsers.\\n */\\n\\n        a:focus {\\n            outline: thin dotted;\\n        }\\n        /**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\n\\n        a:active,\\n        a:hover {\\n            outline: 0;\\n        }\\n        /**\\n * 1. Remove border when inside a element in IE 6/7/8/9 and Firefox 3.\\n * 2. Improve image quality when scaled in IE 7.\\n */\\n\\n        img {\\n            border: 0;\\n            /* 1 */\\n            -ms-interpolation-mode: bicubic;\\n            /* 2 */\\n        }\\n        /**\\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\\n */\\n\\n        figure {\\n            margin: 0;\\n        }\\n        /**\\n * Correct margin displayed oddly in IE 6/7.\\n */\\n\\n        form {\\n            margin: 0;\\n        }\\n        /**\\n * Define consistent border, margin, and padding.\\n */\\n\\n        fieldset {\\n            border: 1px solid #c0c0c0;\\n            margin: 0 2px;\\n            padding: 0.35em 0.625em 0.75em;\\n        }\\n        /**\\n * 1. Correct color not being inherited in IE 6/7/8/9.\\n * 2. Correct text not wrapping in Firefox 3.\\n * 3. Correct alignment displayed oddly in IE 6/7.\\n */\\n\\n        legend {\\n            border: 0;\\n            /* 1 */\\n            padding: 0;\\n            white-space: normal;\\n            /* 2 */\\n            *margin-left: -7px;\\n            /* 3 */\\n        }\\n        /**\\n * 1. Correct font size not being inherited in all browsers.\\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\\n *    and Chrome.\\n * 3. Improve appearance and consistency in all browsers.\\n */\\n\\n        button,\\n        input,\\n        select,\\n        textarea {\\n            font-size: 100%;\\n            /* 1 */\\n            margin: 0;\\n            /* 2 */\\n            vertical-align: baseline;\\n            /* 3 */\\n            *vertical-align: middle;\\n            /* 3 */\\n        }\\n        /**\\n * Address Firefox 3+ setting line-height on input using !important in\\n * the UA stylesheet.\\n */\\n\\n        button,\\n        input {\\n            line-height: normal;\\n        }\\n        /**\\n * Address inconsistent text-transform inheritance for button and select.\\n * All other form control elements do not inherit text-transform values.\\n * Correct button style inheritance in Chrome, Safari 5+, and IE 6+.\\n * Correct select style inheritance in Firefox 4+ and Opera.\\n */\\n\\n        button,\\n        select {\\n            text-transform: none;\\n        }\\n        /**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native audio\\n *    and video controls.\\n * 2. Correct inability to style clickable input types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    input and others.\\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\\n *    Known issue: inner spacing remains in IE 6.\\n */\\n\\n        button,\\n        html input[type=\\"button\\"],\\n        /* 1 */\\n\\n        input[type=\\"reset\\"],\\n        input[type=\\"submit\\"] {\\n            -webkit-appearance: button;\\n            /* 2 */\\n            cursor: pointer;\\n            /* 3 */\\n            *overflow: visible;\\n            /* 4 */\\n        }\\n        /**\\n * Re-set default cursor for disabled elements.\\n */\\n\\n        button[disabled],\\n        html input[disabled] {\\n            cursor: default;\\n        }\\n        /**\\n * 1. Address box sizing set to content-box in IE 8/9.\\n * 2. Remove excess padding in IE 8/9.\\n * 3. Remove excess padding in IE 7.\\n *    Known issue: excess padding remains in IE 6.\\n */\\n\\n        input[type=\\"checkbox\\"],\\n        input[type=\\"radio\\"] {\\n            box-sizing: border-box;\\n            /* 1 */\\n            padding: 0;\\n            /* 2 */\\n            *height: 13px;\\n            /* 3 */\\n            *width: 13px;\\n            /* 3 */\\n        }\\n        /**\\n * 1. Address appearance set to searchfield in Safari 5 and Chrome.\\n * 2. Address box-sizing set to border-box in Safari 5 and Chrome\\n *    (include -moz to future-proof).\\n */\\n\\n        input[type=\\"search\\"] {\\n            -webkit-appearance: textfield;\\n            /* 1 */\\n            -moz-box-sizing: content-box;\\n            -webkit-box-sizing: content-box;\\n            /* 2 */\\n            box-sizing: content-box;\\n        }\\n        /**\\n * Remove inner padding and search cancel button in Safari 5 and Chrome\\n * on OS X.\\n */\\n\\n        input[type=\\"search\\"]::-webkit-search-cancel-button,\\n        input[type=\\"search\\"]::-webkit-search-decoration {\\n            -webkit-appearance: none;\\n        }\\n        /**\\n * Remove inner padding and border in Firefox 3+.\\n */\\n\\n        button::-moz-focus-inner,\\n        input::-moz-focus-inner {\\n            border: 0;\\n            padding: 0;\\n        }\\n        /**\\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\\n * 2. Improve readability and alignment in all browsers.\\n */\\n\\n        textarea {\\n            overflow: auto;\\n            /* 1 */\\n            vertical-align: top;\\n            /* 2 */\\n        }\\n        /**\\n * Remove most spacing between table cells.\\n */\\n\\n        table {\\n            border-collapse: collapse;\\n            border-spacing: 0;\\n        }\\n\\n        html,\\n        button,\\n        input,\\n        select,\\n        textarea {\\n            color: #222;\\n        }\\n\\n        ::-moz-selection {\\n            background: #b3d4fc;\\n            text-shadow: none;\\n        }\\n\\n        ::selection {\\n            background: #b3d4fc;\\n            text-shadow: none;\\n        }\\n\\n        img {\\n            vertical-align: middle;\\n        }\\n\\n        fieldset {\\n            border: 0;\\n            margin: 0;\\n            padding: 0;\\n        }\\n\\n        textarea {\\n            resize: vertical;\\n        }\\n\\n        .chromeframe {\\n            margin: 0.2em 0;\\n            background: #ccc;\\n            color: #000;\\n            padding: 0.2em 0;\\n        }\\n\\n        html {\\n            font-size: calc(1em + 1vw)\\n        }\\n\\n        body {\\n            margin: 0;\\n            padding: 0;\\n            width: 100%;\\n            height: 100%;\\n        }\\n\\n        h1 {\\n            font-size: 2em\\n        }\\n\\n        h2 {\\n            font-size: 1.5em\\n        }\\n\\n        button {\\n            font-size: inherit\\n        }\\n\\n        input {\\n            font-size: inherit\\n        }\\n    </style>\\n    ".concat(styles, "\\n</head>\\n      <div id=\\"app\\">").concat(content, "</div>\\n      <script>\\n        window.INITIAL_STATE = ").concat(JSON.stringify(store.getState()), "\\n      </script>\\n      <script src=\\"dist/bundle.js\\"></script>\\n\\n</html>\\n");\n};\n\n//# sourceURL=webpack:///./client/src/html.js?'
        );

        /***/
      },

    /***/ "./client/src/index.js":
      /*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
      /*! exports provided: App */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_state_of_plant_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/state_of_plant/index */ "./client/src/components/state_of_plant/index.js");\n/* harmony import */ var _components_ground_humidity_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ground_humidity/index */ "./client/src/components/ground_humidity/index.js");\n/* harmony import */ var _components_air_humidity_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/air_humidity/index */ "./client/src/components/air_humidity/index.js");\n/* harmony import */ var _components_luminance_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/luminance/index */ "./client/src/components/luminance/index.js");\n/* harmony import */ var _components_temperature_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/temperature/index */ "./client/src/components/temperature/index.js");\n/* harmony import */ var _components_water_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/water/index */ "./client/src/components/water/index.js");\n/* harmony import */ var _common_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/style */ "./client/src/common/style.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redux/store */ "./client/src/redux/store.js");\n\n\n\n\n\n\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_8__["Color"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_state_of_plant_index__WEBPACK_IMPORTED_MODULE_2__["StateOfPlant"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_style__WEBPACK_IMPORTED_MODULE_8__["WindowsContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_luminance_index__WEBPACK_IMPORTED_MODULE_5__["Luminance"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_water_index__WEBPACK_IMPORTED_MODULE_7__["Water"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_air_humidity_index__WEBPACK_IMPORTED_MODULE_4__["AirHumidity"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ground_humidity_index__WEBPACK_IMPORTED_MODULE_3__["GroundHumidity"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_temperature_index__WEBPACK_IMPORTED_MODULE_6__["Temperature"], null))));\n};\n\n//# sourceURL=webpack:///./client/src/index.js?'
        );

        /***/
      },

    /***/ "./client/src/redux/merge.js":
      /*!***********************************!*\
  !*** ./client/src/redux/merge.js ***!
  \***********************************/
      /*! exports provided: merge */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_water_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/water/reducers */ "./client/src/components/water/reducers.js");\n/* harmony import */ var _components_luminance_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/luminance/reducers */ "./client/src/components/luminance/reducers.js");\n/* harmony import */ var _components_air_humidity_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/air_humidity/reducers */ "./client/src/components/air_humidity/reducers.js");\n/* harmony import */ var _components_ground_humidity_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ground_humidity/reducers */ "./client/src/components/ground_humidity/reducers.js");\n/* harmony import */ var _components_temperature_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/temperature/reducers */ "./client/src/components/temperature/reducers.js");\n\n\n\n\n\n\nvar merge = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({\n  water: _components_water_reducers__WEBPACK_IMPORTED_MODULE_1__["WATER"],\n  luminance: _components_luminance_reducers__WEBPACK_IMPORTED_MODULE_2__["LUMINANCE"],\n  temperature: _components_temperature_reducers__WEBPACK_IMPORTED_MODULE_5__["TEMPERATURE"],\n  groundHumidity: _components_ground_humidity_reducers__WEBPACK_IMPORTED_MODULE_4__["GROUND_HUMIDITY"],\n  airHumidity: _components_air_humidity_reducers__WEBPACK_IMPORTED_MODULE_3__["AIR_HUMIDITY"]\n});\n\n//# sourceURL=webpack:///./client/src/redux/merge.js?'
        );

        /***/
      },

    /***/ "./client/src/redux/store.js":
      /*!***********************************!*\
  !*** ./client/src/redux/store.js ***!
  \***********************************/
      /*! exports provided: store */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge */ "./client/src/redux/merge.js");\n/* harmony import */ var window_or_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! window-or-global */ "window-or-global");\n/* harmony import */ var window_or_global__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(window_or_global__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar composeEnhancers = window_or_global__WEBPACK_IMPORTED_MODULE_3___default.a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];\nvar enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_merge__WEBPACK_IMPORTED_MODULE_2__["merge"], enhancer);\n\n//# sourceURL=webpack:///./client/src/redux/store.js?'
        );

        /***/
      },

    /***/ "./server/index.js":
      /*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_src_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/src/redux/store */ "./client/src/redux/store.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _client_src_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client/src/index */ "./client/src/index.js");\n/* harmony import */ var _client_src_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client/src/html */ "./client/src/html.js");\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use("/dist", express__WEBPACK_IMPORTED_MODULE_2___default.a["static"]("dist"));\napp.get("*",\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var sheet, content, styles;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            sheet = new styled_components__WEBPACK_IMPORTED_MODULE_8__["ServerStyleSheet"]();\n            content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {\n              store: _client_src_redux_store__WEBPACK_IMPORTED_MODULE_6__["store"]\n            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_client_src_index__WEBPACK_IMPORTED_MODULE_9__["App"], null))));\n            styles = sheet.getStyleTags();\n            res.send(Object(_client_src_html__WEBPACK_IMPORTED_MODULE_10__["html"])({\n              store: _client_src_redux_store__WEBPACK_IMPORTED_MODULE_6__["store"],\n              content: content,\n              styles: styles\n            }));\n\n          case 4:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(5000, function () {\n  return console.log("Frontend service listening on port: 5000");\n});\n\n//# sourceURL=webpack:///./server/index.js?'
        );

        /***/
      },

    /***/ "@babel/runtime/helpers/asyncToGenerator":
      /*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("@babel/runtime/helpers/asyncToGenerator");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?'
        );

        /***/
      },

    /***/ "@babel/runtime/regenerator":
      /*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("@babel/runtime/regenerator");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?'
        );

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?'
        );

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("react");\n\n//# sourceURL=webpack:///external_%22react%22?'
        );

        /***/
      },

    /***/ "react-dom":
      /*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("react-dom");\n\n//# sourceURL=webpack:///external_%22react-dom%22?'
        );

        /***/
      },

    /***/ "react-dom/server":
      /*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("react-dom/server");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?'
        );

        /***/
      },

    /***/ "react-redux":
      /*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("react-redux");\n\n//# sourceURL=webpack:///external_%22react-redux%22?'
        );

        /***/
      },

    /***/ "react-router-dom":
      /*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("react-router-dom");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?'
        );

        /***/
      },

    /***/ redux:
      /*!************************!*\
  !*** external "redux" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("redux");\n\n//# sourceURL=webpack:///external_%22redux%22?'
        );

        /***/
      },

    /***/ "redux-thunk":
      /*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("redux-thunk");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?'
        );

        /***/
      },

    /***/ "styled-components":
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("styled-components");\n\n//# sourceURL=webpack:///external_%22styled-components%22?'
        );

        /***/
      },

    /***/ "window-or-global":
      /*!***********************************!*\
  !*** external "window-or-global" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("window-or-global");\n\n//# sourceURL=webpack:///external_%22window-or-global%22?'
        );

        /***/
      }

    /******/
  }
);
