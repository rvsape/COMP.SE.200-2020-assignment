"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _upperFirst = _interopRequireDefault(require("./upperFirst.js"));

var _words = _interopRequireDefault(require("./words.js"));

var _toString = _interopRequireDefault(require("./toString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
var camelCase = function camelCase(string) {
  return (0, _words["default"])((0, _toString["default"])(string).replace(/['\u2019]/g, '')).reduce(function (result, word, index) {
    word = word.toLowerCase();
    return result + (index ? (0, _upperFirst["default"])(word) : word);
  }, ' ');
};

var _default = camelCase;
exports["default"] = _default;