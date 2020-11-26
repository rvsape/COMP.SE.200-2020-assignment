"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/** Built-in value references. */
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

function getSymbols(object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return nativeGetSymbols(object).filter(function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
}

var _default = getSymbols;
exports["default"] = _default;