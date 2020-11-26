"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eq = _interopRequireDefault(require("../eq.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `sortedUniq` and `sortedUniqBy`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseSortedUniq(array, iteratee) {
  var seen;
  var index = -1;
  var resIndex = 0;
  var length = array.length;
  var result = [];

  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    if (!index || !(0, _eq["default"])(computed, seen)) {
      seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }

  return result;
}

var _default = baseSortedUniq;
exports["default"] = _default;