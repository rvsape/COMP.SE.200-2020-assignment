"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseForOwnRight = _interopRequireDefault(require("./baseForOwnRight.js"));

var _isArrayLike = _interopRequireDefault(require("../isArrayLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `forEachRight`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
function baseEachRight(collection, iteratee) {
  if (collection == null) {
    return collection;
  }

  if (!(0, _isArrayLike["default"])(collection)) {
    return (0, _baseForOwnRight["default"])(collection, iteratee);
  }

  var iterable = Object(collection);
  var length = collection.length;

  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break;
    }
  }

  return collection;
}

var _default = baseEachRight;
exports["default"] = _default;