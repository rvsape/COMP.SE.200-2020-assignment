"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isSymbol = _interopRequireDefault(require("../isSymbol.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolToString = Symbol.prototype.toString;
/**
 * The base implementation of `toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return "".concat(value.map(baseToString));
  }

  if ((0, _isSymbol["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = "".concat(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _default = baseToString;
exports["default"] = _default;