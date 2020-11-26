"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isKey = _interopRequireDefault(require("./isKey.js"));

var _stringToPath = _interopRequireDefault(require("./stringToPath.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Array.isArray(value)) {
    return value;
  }

  return (0, _isKey["default"])(value, object) ? [value] : (0, _stringToPath["default"])(value);
}

var _default = castPath;
exports["default"] = _default;