"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SetCache = _interopRequireDefault(require("./SetCache.js"));

var _arrayIncludes = _interopRequireDefault(require("./arrayIncludes.js"));

var _arrayIncludesWith = _interopRequireDefault(require("./arrayIncludesWith.js"));

var _map = _interopRequireDefault(require("../map.js"));

var _cacheHas = _interopRequireDefault(require("./cacheHas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of methods like `intersection` that accepts an
 * array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? _arrayIncludesWith["default"] : _arrayIncludes["default"];
  var length = arrays[0].length;
  var othLength = arrays.length;
  var caches = new Array(othLength);
  var result = [];
  var array;
  var maxLength = Infinity;
  var othIndex = othLength;

  while (othIndex--) {
    array = arrays[othIndex];

    if (othIndex && iteratee) {
      array = (0, _map["default"])(array, function (value) {
        return iteratee(value);
      });
    }

    maxLength = Math.min(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new _SetCache["default"](othIndex && array) : undefined;
  }

  array = arrays[0];
  var index = -1;
  var seen = caches[0];

  outer: while (++index < length && result.length < maxLength) {
    var value = array[index];
    var computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;

    if (!(seen ? (0, _cacheHas["default"])(seen, computed) : includes(result, computed, comparator))) {
      othIndex = othLength;

      while (--othIndex) {
        var cache = caches[othIndex];

        if (!(cache ? (0, _cacheHas["default"])(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
          continue outer;
        }
      }

      if (seen) {
        seen.push(computed);
      }

      result.push(value);
    }
  }

  return result;
}

var _default = baseIntersection;
exports["default"] = _default;