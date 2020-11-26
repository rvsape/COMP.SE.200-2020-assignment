"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isArguments = _interopRequireDefault(require("../isArguments.js"));

var _isBuffer = _interopRequireDefault(require("../isBuffer.js"));

var _isIndex = _interopRequireDefault(require("./isIndex.js"));

var _isTypedArray = _interopRequireDefault(require("../isTypedArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = Array.isArray(value);
  var isArg = !isArr && (0, _isArguments["default"])(value);
  var isBuff = !isArr && !isArg && (0, _isBuffer["default"])(value);
  var isType = !isArr && !isArg && !isBuff && (0, _isTypedArray["default"])(value);
  var skipIndexes = isArr || isArg || isBuff || isType;
  var length = value.length;
  var result = new Array(skipIndexes ? length : 0);
  var index = skipIndexes ? -1 : length;

  while (++index < length) {
    result[index] = "".concat(index);
  }

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key === 'length' || // Skip index properties.
    (0, _isIndex["default"])(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

var _default = arrayLikeKeys;
exports["default"] = _default;