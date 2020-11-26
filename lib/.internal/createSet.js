"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _setToArray = _interopRequireDefault(require("./setToArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */

var createSet = Set && 1 / (0, _setToArray["default"])(new Set([, -0]))[1] == INFINITY ? function (values) {
  return new Set(values);
} : function () {};
var _default = createSet;
exports["default"] = _default;