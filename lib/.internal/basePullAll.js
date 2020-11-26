"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _map = _interopRequireDefault(require("../map.js"));

var _baseIndexOf = _interopRequireDefault(require("./baseIndexOf.js"));

var _baseIndexOfWith = _interopRequireDefault(require("./baseIndexOfWith.js"));

var _copyArray = _interopRequireDefault(require("./copyArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `pullAllBy`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? _baseIndexOfWith["default"] : _baseIndexOf["default"];
  var length = values.length;
  var index = -1;
  var seen = array;

  if (array === values) {
    values = (0, _copyArray["default"])(values);
  }

  if (iteratee) {
    seen = (0, _map["default"])(array, function (value) {
      return iteratee(value);
    });
  }

  while (++index < length) {
    var fromIndex = 0;
    var value = values[index];
    var computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        seen.splice(fromIndex, 1);
      }

      array.splice(fromIndex, 1);
    }
  }

  return array;
}

var _default = basePullAll;
exports["default"] = _default;