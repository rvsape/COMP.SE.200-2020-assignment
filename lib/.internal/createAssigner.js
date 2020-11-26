"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isIterateeCall = _interopRequireDefault(require("./isIterateeCall.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a function like `assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return function (object) {
    var index = -1;
    var length = arguments.length <= 1 ? 0 : arguments.length - 1;
    var customizer = length > 1 ? length - 1 + 1 < 1 || arguments.length <= length - 1 + 1 ? undefined : arguments[length - 1 + 1] : undefined;
    var guard = length > 2 ? arguments.length <= 3 ? undefined : arguments[3] : undefined;
    customizer = assigner.length > 3 && typeof customizer === 'function' ? (length--, customizer) : undefined;

    if (guard && (0, _isIterateeCall["default"])(arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = index + 1 < 1 || arguments.length <= index + 1 ? undefined : arguments[index + 1];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  };
}

var _default = createAssigner;
exports["default"] = _default;