"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseForRight = _interopRequireDefault(require("./baseForRight.js"));

var _keys = _interopRequireDefault(require("../keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `forOwnRight`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwnRight(object, iteratee) {
  return object && (0, _baseForRight["default"])(object, iteratee, _keys["default"]);
}

var _default = baseForOwnRight;
exports["default"] = _default;