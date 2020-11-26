"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseForOwn = _interopRequireDefault(require("./baseForOwn.js"));

var _isArrayLike = _interopRequireDefault(require("../isArrayLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `forEach`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
function baseEach(collection, iteratee) {
  if (collection == null) {
    return collection;
  }

  if (!(0, _isArrayLike["default"])(collection)) {
    return (0, _baseForOwn["default"])(collection, iteratee);
  }

  var length = collection.length;
  var iterable = Object(collection);
  var index = -1;

  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) {
      break;
    }
  }

  return collection;
}

var _default = baseEach;
exports["default"] = _default;