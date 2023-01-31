"use strict";
function injectProp(target, propName, get, set) {
  Object.defineProperty(target, propName, {
    get,
    set,
    enumerable: true
  });
  return target;
}
exports.injectProp = injectProp;
