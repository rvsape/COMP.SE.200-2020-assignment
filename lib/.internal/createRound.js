"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Creates a function like `round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function (number, precision) {
    precision = precision == null ? 0 : precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292);

    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = "".concat(number, "e").split('e');
      var value = func("".concat(pair[0], "e").concat(+pair[1] + precision));
      pair = "".concat(value, "e").split('e');
      return +"".concat(pair[0], "e").concat(+pair[1] - precision);
    }

    return func(number);
  };
}

var _default = createRound;
exports["default"] = _default;