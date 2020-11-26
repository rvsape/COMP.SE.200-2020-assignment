"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _MapCache = _interopRequireDefault(require("./MapCache.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

var SetCache = /*#__PURE__*/function () {
  /**
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    _classCallCheck(this, SetCache);

    var index = -1;
    var length = values == null ? 0 : values.length;
    this.__data__ = new _MapCache["default"]();

    while (++index < length) {
      this.add(values[index]);
    }
  }
  /**
   * Adds `value` to the array cache.
   *
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */


  _createClass(SetCache, [{
    key: "add",
    value: function add(value) {
      this.__data__.set(value, HASH_UNDEFINED);

      return this;
    }
    /**
     * Checks if `value` is in the array cache.
     *
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     */

  }, {
    key: "has",
    value: function has(value) {
      return this.__data__.has(value);
    }
  }]);

  return SetCache;
}();

SetCache.prototype.push = SetCache.prototype.add;
var _default = SetCache;
exports["default"] = _default;