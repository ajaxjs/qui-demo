"use strict";
let waitFlags = [];
function addFocusFn(fn) {
  if (waitFlags.length === 0) {
    fn();
  }
}
exports.addFocusFn = addFocusFn;
