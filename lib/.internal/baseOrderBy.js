"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseEach = _interopRequireDefault(require("./baseEach.js"));

var _baseSortBy = _interopRequireDefault(require("./baseSortBy.js"));

var _baseGet = _interopRequireDefault(require("./baseGet.js"));

var _compareMultiple = _interopRequireDefault(require("./compareMultiple.js"));

var _isArrayLike = _interopRequireDefault(require("../isArrayLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var identity = function identity(value) {
  return value;
};
/**
 * The base implementation of `orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */


function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = iteratees.map(function (iteratee) {
      if (Array.isArray(iteratee)) {
        return function (value) {
          return (0, _baseGet["default"])(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }

      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var criteriaIndex = -1;
  var eachIndex = -1;
  var result = (0, _isArrayLike["default"])(collection) ? new Array(collection.length) : [];
  (0, _baseEach["default"])(collection, function (value) {
    var criteria = iteratees.map(function (iteratee) {
      return iteratee(value);
    });
    result[++eachIndex] = {
      criteria: criteria,
      index: ++criteriaIndex,
      value: value
    };
  });
  return (0, _baseSortBy["default"])(result, function (object, other) {
    return (0, _compareMultiple["default"])(object, other, orders);
  });
}

var _default = baseOrderBy;
exports["default"] = _default;