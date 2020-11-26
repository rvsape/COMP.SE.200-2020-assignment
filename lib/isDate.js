"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getTag = _interopRequireDefault(require("./.internal/getTag.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

var _nodeTypes = _interopRequireDefault(require("./.internal/nodeTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* Node.js helper references. */
var nodeIsDate = _nodeTypes["default"] && _nodeTypes["default"].isDate;
/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 */

var isDate = nodeIsDate ? function (value) {
  return nodeIsDate(value);
} : function (value) {
  return (0, _isObjectLike["default"])(value) && (0, _getTag["default"])(value) == '[object Date]';
};
var _default = isDate;
exports["default"] = _default;