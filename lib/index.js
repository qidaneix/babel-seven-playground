"use strict";

var _bar = _interopRequireDefault(require("./bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function foo() {
  const a = await Promise.resolve(_bar.default);
  return a;
}