"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseAssignValue = _interopRequireDefault(require("./.internal/baseAssignValue.js"));

var _reduce = _interopRequireDefault(require("./reduce.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * countBy(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 */

function countBy(collection, iteratee) {
  return (0, _reduce["default"])(collection, function (result, value, key) {
    key = iteratee(value);

    if (hasOwnProperty.call(result, key)) {
      ++result[key];
    } else {
      (0, _baseAssignValue["default"])(result, key, 0);
    }

    return result;
  }, {});
}

var _default = countBy;
exports["default"] = _default;