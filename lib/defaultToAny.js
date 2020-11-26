"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _arrayReduce = _interopRequireDefault(require("./.internal/arrayReduce.js"));

var _defaultTo = _interopRequireDefault(require("./defaultTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
 * `NaN`, `null`, or `undefined`.
 *
 * @since 5.0.0
 * @category Util
 * @param {*} value The value to check.
 * @param {...*} defaultValues The default values.
 * @returns {*} Returns the resolved value.
 * @see _.defaultTo
 * @example
 *
 * defaultToAny(1, 10, 20)
 * // => 1
 *
 * defaultToAny(undefined, 10, 20)
 * // => 10
 *
 * defaultToAny(undefined, null, 20)
 * // => 20
 *
 * defaultToAny(undefined, null, NaN)
 * // => NaN
 */
function defaultToAny(value) {
  for (var _len = arguments.length, defaultValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    defaultValues[_key - 1] = arguments[_key];
  }

  return (0, _arrayReduce["default"])(defaultValues, _defaultTo["default"], value);
}

var _default = defaultToAny;
exports["default"] = _default;