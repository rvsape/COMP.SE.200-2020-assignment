"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseRange = _interopRequireDefault(require("./baseRange.js"));

var _toFinite = _interopRequireDefault(require("../toFinite.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a `range` or `rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function (start, end, step) {
    // Ensure the sign of `-0` is preserved.
    start = (0, _toFinite["default"])(start);

    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = (0, _toFinite["default"])(end);
    }

    step = step === undefined ? start < end ? 1 : -1 : (0, _toFinite["default"])(step);
    return (0, _baseRange["default"])(start, end, step, fromRight);
  };
}

var _default = createRange;
exports["default"] = _default;