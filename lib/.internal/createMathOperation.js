"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseToNumber = _interopRequireDefault(require("./baseToNumber.js"));

var _baseToString = _interopRequireDefault(require("./baseToString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */
function createMathOperation(operator, defaultValue) {
  return function (value, other) {
    if (value === undefined && other === undefined) {
      return defaultValue;
    }

    if (value !== undefined && other === undefined) {
      return value;
    }

    if (other !== undefined && value === undefined) {
      return other;
    }

    if (typeof value === 'string' || typeof other === 'string') {
      value = (0, _baseToString["default"])(value);
      other = (0, _baseToString["default"])(other);
    } else {
      value = (0, _baseToNumber["default"])(value);
      other = (0, _baseToNumber["default"])(other);
    }

    return operator(value, other);
  };
}

var _default = createMathOperation;
exports["default"] = _default;