"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseGet = _interopRequireDefault(require("./baseGet.js"));

var _baseSet = _interopRequireDefault(require("./baseSet.js"));

var _castPath = _interopRequireDefault(require("./castPath.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `pickBy`.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1;
  var length = paths.length;
  var result = {};

  while (++index < length) {
    var path = paths[index];
    var value = (0, _baseGet["default"])(object, path);

    if (predicate(value, path)) {
      (0, _baseSet["default"])(result, (0, _castPath["default"])(path, object), value);
    }
  }

  return result;
}

var _default = basePickBy;
exports["default"] = _default;