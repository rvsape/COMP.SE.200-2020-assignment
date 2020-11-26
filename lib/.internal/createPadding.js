"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _repeat = _interopRequireDefault(require("../repeat.js"));

var _baseToString = _interopRequireDefault(require("./baseToString.js"));

var _castSlice = _interopRequireDefault(require("./castSlice.js"));

var _hasUnicode = _interopRequireDefault(require("./hasUnicode.js"));

var _stringSize = _interopRequireDefault(require("./stringSize.js"));

var _stringToArray = _interopRequireDefault(require("./stringToArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : (0, _baseToString["default"])(chars);
  var charsLength = chars.length;

  if (charsLength < 2) {
    return charsLength ? (0, _repeat["default"])(chars, length) : chars;
  }

  var result = (0, _repeat["default"])(chars, Math.ceil(length / (0, _stringSize["default"])(chars)));
  return (0, _hasUnicode["default"])(chars) ? (0, _castSlice["default"])((0, _stringToArray["default"])(result), 0, length).join('') : result.slice(0, length);
}

var _default = createPadding;
exports["default"] = _default;