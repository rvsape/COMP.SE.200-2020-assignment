"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/** Used to match template delimiters. */
var reEvaluate = /<%([\s\S]+?)%>/g;
var _default = reEvaluate;
exports["default"] = _default;