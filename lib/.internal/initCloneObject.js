"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isPrototype = _interopRequireDefault(require("./isPrototype.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor === 'function' && !(0, _isPrototype["default"])(object) ? Object.create(Object.getPrototypeOf(object)) : {};
}

var _default = initCloneObject;
exports["default"] = _default;