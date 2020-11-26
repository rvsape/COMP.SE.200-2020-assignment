"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isSymbol = _interopRequireDefault(require("./isSymbol.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */

function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return "".concat(value.map(function (other) {
      return other == null ? other : toString(other);
    }));
  }

  if ((0, _isSymbol["default"])(value)) {
    return value.toString();
  }

  var result = "".concat(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _default = toString;
exports["default"] = _default;