"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * This function is like `baseFor` except that it iterates over properties
 * in the opposite order.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
function baseForRight(object, iteratee, keysFunc) {
  var iterable = Object(object);
  var props = keysFunc(object);
  var length = props.length;

  while (length--) {
    var key = props[length];

    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }

  return object;
}

var _default = baseForRight;
exports["default"] = _default;