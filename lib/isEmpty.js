"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getTag = _interopRequireDefault(require("./.internal/getTag.js"));

var _isArguments = _interopRequireDefault(require("./isArguments.js"));

var _isArrayLike = _interopRequireDefault(require("./isArrayLike.js"));

var _isBuffer = _interopRequireDefault(require("./isBuffer.js"));

var _isPrototype = _interopRequireDefault(require("./.internal/isPrototype.js"));

var _isTypedArray = _interopRequireDefault(require("./isTypedArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if ((0, _isArrayLike["default"])(value) && (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function' || (0, _isBuffer["default"])(value) || (0, _isTypedArray["default"])(value) || (0, _isArguments["default"])(value))) {
    return !value.length;
  }

  var tag = (0, _getTag["default"])(value);

  if (tag == '[object Map]' || tag == '[object Set]') {
    return !value.size;
  }

  if ((0, _isPrototype["default"])(value)) {
    return !Object.keys(value).length;
  }

  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
}

var _default = isEmpty;
exports["default"] = _default;