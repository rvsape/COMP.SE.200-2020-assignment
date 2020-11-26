"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getTag = _interopRequireDefault(require("./.internal/getTag.js"));

var _nodeTypes = _interopRequireDefault(require("./.internal/nodeTypes.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used to match `toStringTag` values of typed arrays. */
var reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
/* Node.js helper references. */

var nodeIsTypedArray = _nodeTypes["default"] && _nodeTypes["default"].isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? function (value) {
  return nodeIsTypedArray(value);
} : function (value) {
  return (0, _isObjectLike["default"])(value) && reTypedTag.test((0, _getTag["default"])(value));
};
var _default = isTypedArray;
exports["default"] = _default;