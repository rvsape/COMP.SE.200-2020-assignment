"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _freeGlobal = _interopRequireDefault(require("./freeGlobal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `globalThis` */
var freeGlobalThis = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object' && globalThis !== null && globalThis.Object == Object && globalThis;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self !== null && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobalThis || _freeGlobal["default"] || freeSelf || Function('return this')();
var _default = root;
exports["default"] = _default;