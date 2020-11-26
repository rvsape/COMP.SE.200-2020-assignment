"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _freeGlobal = _interopRequireDefault(require("./freeGlobal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `exports`. */
var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && exports !== null && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module !== null && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && _freeGlobal["default"].process;
/** Used to access faster Node.js helpers. */

var nodeTypes = function () {
  try {
    /* Detect public `util.types` helpers for Node.js v10+. */

    /* Node.js deprecation code: DEP0103. */
    var typesHelper = freeModule && freeModule.require && freeModule.require('util').types;

    return typesHelper ? typesHelper
    /* Legacy process.binding('util') for Node.js earlier than v10. */
    : freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

var _default = nodeTypes;
exports["default"] = _default;