"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1;
  var result = new Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

var _default = setToArray;
exports["default"] = _default;