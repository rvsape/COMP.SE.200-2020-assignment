"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _get = _interopRequireDefault(require("../get.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
function baseAt(object, paths) {
  var index = -1;
  var length = paths.length;
  var result = new Array(length);
  var skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : (0, _get["default"])(object, paths[index]);
  }

  return result;
}

var _default = baseAt;
exports["default"] = _default;