"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */
function setToPairs(set) {
  var index = -1;
  var result = new Array(set.size);
  set.forEach(function (value) {
    result[++index] = [value, value];
  });
  return result;
}

var _default = setToPairs;
exports["default"] = _default;