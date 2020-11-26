"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isStrictComparable = _interopRequireDefault(require("./isStrictComparable.js"));

var _keys = _interopRequireDefault(require("../keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = (0, _keys["default"])(object);
  var length = result.length;

  while (length--) {
    var key = result[length];
    var value = object[key];
    result[length] = [key, value, (0, _isStrictComparable["default"])(value)];
  }

  return result;
}

var _default = getMatchData;
exports["default"] = _default;