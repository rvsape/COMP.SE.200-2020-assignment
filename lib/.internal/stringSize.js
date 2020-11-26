"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _asciiSize = _interopRequireDefault(require("./asciiSize.js"));

var _hasUnicode = _interopRequireDefault(require("./hasUnicode.js"));

var _unicodeSize = _interopRequireDefault(require("./unicodeSize.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return (0, _hasUnicode["default"])(string) ? (0, _unicodeSize["default"])(string) : (0, _asciiSize["default"])(string);
}

var _default = stringSize;
exports["default"] = _default;