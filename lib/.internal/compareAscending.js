"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isSymbol = _interopRequireDefault(require("../isSymbol.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined;
    var valIsNull = value === null;
    var valIsReflexive = value === value;
    var valIsSymbol = (0, _isSymbol["default"])(value);
    var othIsDefined = other !== undefined;
    var othIsNull = other === null;
    var othIsReflexive = other === other;
    var othIsSymbol = (0, _isSymbol["default"])(other);
    var val = typeof value === 'string' ? value.localeCompare(other) : -other;

    if (!othIsNull && !othIsSymbol && !valIsSymbol && val > 0 || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }

    if (!valIsNull && !valIsSymbol && !othIsSymbol && val < 0 || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }

  return 0;
}

var _default = compareAscending;
exports["default"] = _default;