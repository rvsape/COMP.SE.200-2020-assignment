"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g;
var _default = reEscape;
exports["default"] = _default;