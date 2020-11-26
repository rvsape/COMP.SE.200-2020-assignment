"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/** Used to convert symbols to primitives and strings. */
var symbolValueOf = Symbol.prototype.valueOf;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return Object(symbolValueOf.call(symbol));
}

var _default = cloneSymbol;
exports["default"] = _default;