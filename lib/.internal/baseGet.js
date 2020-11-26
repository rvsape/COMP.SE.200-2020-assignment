"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _castPath = _interopRequireDefault(require("./castPath.js"));

var _toKey = _interopRequireDefault(require("./toKey.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0, _castPath["default"])(path, object);
  var index = 0;
  var length = path.length;

  while (object != null && index < length) {
    object = object[(0, _toKey["default"])(path[index++])];
  }

  return index && index == length ? object : undefined;
}

var _default = baseGet;
exports["default"] = _default;