"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Stack = _interopRequireDefault(require("./Stack.js"));

var _arrayEach = _interopRequireDefault(require("./arrayEach.js"));

var _assignValue = _interopRequireDefault(require("./assignValue.js"));

var _cloneBuffer = _interopRequireDefault(require("./cloneBuffer.js"));

var _copyArray = _interopRequireDefault(require("./copyArray.js"));

var _copyObject = _interopRequireDefault(require("./copyObject.js"));

var _cloneArrayBuffer = _interopRequireDefault(require("./cloneArrayBuffer.js"));

var _cloneDataView = _interopRequireDefault(require("./cloneDataView.js"));

var _cloneRegExp = _interopRequireDefault(require("./cloneRegExp.js"));

var _cloneSymbol = _interopRequireDefault(require("./cloneSymbol.js"));

var _cloneTypedArray = _interopRequireDefault(require("./cloneTypedArray.js"));

var _copySymbols = _interopRequireDefault(require("./copySymbols.js"));

var _copySymbolsIn = _interopRequireDefault(require("./copySymbolsIn.js"));

var _getAllKeys = _interopRequireDefault(require("./getAllKeys.js"));

var _getAllKeysIn = _interopRequireDefault(require("./getAllKeysIn.js"));

var _getTag = _interopRequireDefault(require("./getTag.js"));

var _initCloneObject = _interopRequireDefault(require("./initCloneObject.js"));

var _isBuffer = _interopRequireDefault(require("../isBuffer.js"));

var _isObject = _interopRequireDefault(require("../isObject.js"));

var _isTypedArray = _interopRequireDefault(require("../isTypedArray.js"));

var _keys = _interopRequireDefault(require("../keys.js"));

var _keysIn = _interopRequireDefault(require("../keysIn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag = '[object Symbol]';
var weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[weakMapTag] = false;
/** Used to check objects for own properties. */

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag:
      return (0, _cloneArrayBuffer["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return (0, _cloneDataView["default"])(object, isDeep);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return (0, _cloneTypedArray["default"])(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return (0, _cloneRegExp["default"])(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return (0, _cloneSymbol["default"])(object);
  }
}
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */


function initCloneArray(array) {
  var length = array.length;
  var result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] === 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}
/**
 * The base implementation of `clone` and `cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {number} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */


function baseClone(value, bitmask, customizer, key, object, stack) {
  var result;
  var isDeep = bitmask & CLONE_DEEP_FLAG;
  var isFlat = bitmask & CLONE_FLAT_FLAG;
  var isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!(0, _isObject["default"])(value)) {
    return value;
  }

  var isArr = Array.isArray(value);
  var tag = (0, _getTag["default"])(value);

  if (isArr) {
    result = initCloneArray(value);

    if (!isDeep) {
      return (0, _copyArray["default"])(value, result);
    }
  } else {
    var isFunc = typeof value === 'function';

    if ((0, _isBuffer["default"])(value)) {
      return (0, _cloneBuffer["default"])(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0, _initCloneObject["default"])(value);

      if (!isDeep) {
        return isFlat ? (0, _copySymbolsIn["default"])(value, (0, _copyObject["default"])(value, (0, _keysIn["default"])(value), result)) : (0, _copySymbols["default"])(value, Object.assign(result, value));
      }
    } else {
      if (isFunc || !cloneableTags[tag]) {
        return object ? value : {};
      }

      result = initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new _Stack["default"]());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (tag == mapTag) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  if (tag == setTag) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
    return result;
  }

  if ((0, _isTypedArray["default"])(value)) {
    return result;
  }

  var keysFunc = isFull ? isFlat ? _getAllKeysIn["default"] : _getAllKeys["default"] : isFlat ? _keysIn["default"] : _keys["default"];
  var props = isArr ? undefined : keysFunc(value);
  (0, _arrayEach["default"])(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    (0, _assignValue["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _default = baseClone;
exports["default"] = _default;