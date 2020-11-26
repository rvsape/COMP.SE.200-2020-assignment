"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data;
  var result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }

  return result;
}

var _default = iteratorToArray;
exports["default"] = _default;