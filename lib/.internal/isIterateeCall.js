"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isArrayLike = _interopRequireDefault(require("../isArrayLike.js"));

var _isIndex = _interopRequireDefault(require("./isIndex.js"));

var _isObject = _interopRequireDefault(require("../isObject.js"));

var _eq = _interopRequireDefault(require("../eq.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0, _isObject["default"])(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type === 'number' ? (0, _isArrayLike["default"])(object) && (0, _isIndex["default"])(index, object.length) : type === 'string' && index in object) {
    return (0, _eq["default"])(object[index], value);
  }

  return false;
}

var _default = isIterateeCall;
exports["default"] = _default;