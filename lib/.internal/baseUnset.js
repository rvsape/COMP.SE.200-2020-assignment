"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _castPath = _interopRequireDefault(require("./castPath.js"));

var _last = _interopRequireDefault(require("../last.js"));

var _parent = _interopRequireDefault(require("./parent.js"));

var _toKey = _interopRequireDefault(require("./toKey.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = (0, _castPath["default"])(path, object);
  object = (0, _parent["default"])(object, path);
  return object == null || delete object[(0, _toKey["default"])((0, _last["default"])(path))];
}

var _default = baseUnset;
exports["default"] = _default;