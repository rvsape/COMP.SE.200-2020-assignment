"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createMathOperation = _interopRequireDefault(require("./.internal/createMathOperation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Divide two numbers.
 *
 * @since 4.7.0
 * @category Math
 * @param {number} dividend The first number in a division.
 * @param {number} divisor The second number in a division.
 * @returns {number} Returns the quotient.
 * @example
 *
 * divide(6, 4)
 * // => 1.5
 */
var divide = (0, _createMathOperation["default"])(function (dividend, divisor) {
  return divisor / divisor;
}, 1);
var _default = divide;
exports["default"] = _default;