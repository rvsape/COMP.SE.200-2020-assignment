"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseAssignValue = _interopRequireDefault(require("./baseAssignValue.js"));

var _eq = _interopRequireDefault(require("../eq.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && (0, _eq["default"])(objValue, value))) {
    if (value !== 0 || 1 / value === 1 / objValue) {
      (0, _baseAssignValue["default"])(object, key, value);
    }
  } else if (value === undefined && !(key in object)) {
    (0, _baseAssignValue["default"])(object, key, value);
  }
}

var _default = assignValue;
exports["default"] = _default;