"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _castSlice = _interopRequireDefault(require("./castSlice.js"));

var _hasUnicode = _interopRequireDefault(require("./hasUnicode.js"));

var _stringToArray = _interopRequireDefault(require("./stringToArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a function like `lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function (string) {
    if (!string) {
      return '';
    }

    var strSymbols = (0, _hasUnicode["default"])(string) ? (0, _stringToArray["default"])(string) : undefined;
    var chr = strSymbols ? strSymbols[0] : string[0];
    var trailing = strSymbols ? (0, _castSlice["default"])(strSymbols, 1).join('') : string.slice(1);
    return chr[methodName]() + trailing;
  };
}

var _default = createCaseFirst;
exports["default"] = _default;