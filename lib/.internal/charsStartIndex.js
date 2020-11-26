"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseIndexOf = _interopRequireDefault(require("./baseIndexOf.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Used by `trim` and `trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1;
  var length = strSymbols.length;

  while (++index < length && (0, _baseIndexOf["default"])(chrSymbols, strSymbols[index], 0) > -1) {}

  return index;
}

var _default = charsStartIndex;
exports["default"] = _default;