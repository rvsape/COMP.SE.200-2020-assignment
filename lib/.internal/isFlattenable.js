"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isArguments = _interopRequireDefault(require("../isArguments.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Built-in value reference. */
var spreadableSymbol = Symbol.isConcatSpreadable;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */

function isFlattenable(value) {
  return Array.isArray(value) || (0, _isArguments["default"])(value) || !!(value && value[spreadableSymbol]);
}

var _default = isFlattenable;
exports["default"] = _default;