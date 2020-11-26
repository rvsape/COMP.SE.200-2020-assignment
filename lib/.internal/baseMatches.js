"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseIsMatch = _interopRequireDefault(require("./baseIsMatch.js"));

var _getMatchData = _interopRequireDefault(require("./getMatchData.js"));

var _matchesStrictComparable = _interopRequireDefault(require("./matchesStrictComparable.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The base implementation of `matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = (0, _getMatchData["default"])(source);

  if (matchData.length === 1 && matchData[0][2]) {
    return (0, _matchesStrictComparable["default"])(matchData[0][0], matchData[0][1]);
  }

  return function (object) {
    return object === source || (0, _baseIsMatch["default"])(object, source, matchData);
  };
}

var _default = baseMatches;
exports["default"] = _default;