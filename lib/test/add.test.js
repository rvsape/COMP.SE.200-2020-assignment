"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _add = _interopRequireDefault(require("../add.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var expect = _chai["default"].expect;
describe("Sum", function () {
  it("adds positive number to positive number", function () {
    expect((0, _add["default"])(3, 6)).to.equal(9);
  });
});