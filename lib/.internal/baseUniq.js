"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SetCache = _interopRequireDefault(require("./SetCache.js"));

var _arrayIncludes = _interopRequireDefault(require("./arrayIncludes.js"));

var _arrayIncludesWith = _interopRequireDefault(require("./arrayIncludesWith.js"));

var _cacheHas = _interopRequireDefault(require("./cacheHas.js"));

var _createSet = _interopRequireDefault(require("./createSet.js"));

var _setToArray = _interopRequireDefault(require("./setToArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/**
 * The base implementation of `uniqBy`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */

function baseUniq(array, iteratee, comparator) {
  var index = -1;
  var includes = _arrayIncludes["default"];
  var isCommon = true;
  var length = array.length;
  var result = [];
  var seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith["default"];
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : (0, _createSet["default"])(array);

    if (set) {
      return (0, _setToArray["default"])(set);
    }

    isCommon = false;
    includes = _cacheHas["default"];
    seen = new _SetCache["default"]();
  } else {
    seen = iteratee ? [] : result;
  }

  outer: while (++index < length) {
    var value = array[index];
    var computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;

    if (isCommon && computed === computed) {
      var seenIndex = seen.length;

      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }

      if (iteratee) {
        seen.push(computed);
      }

      result.push(value);
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }

      result.push(value);
    }
  }

  return result;
}

var _default = baseUniq;
exports["default"] = _default;