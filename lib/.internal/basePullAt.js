"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseUnset = _interopRequireDefault(require("./baseUnset.js"));

var _isIndex = _interopRequireDefault(require("./isIndex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0;
  var lastIndex = length - 1;

  while (length--) {
    var previous = void 0;
    var index = indexes[length];

    if (length === lastIndex || index !== previous) {
      previous = index;

      if ((0, _isIndex["default"])(index)) {
        array.splice(index, 1);
      } else {
        (0, _baseUnset["default"])(array, index);
      }
    }
  }

  return array;
}

var _default = basePullAt;
exports["default"] = _default;