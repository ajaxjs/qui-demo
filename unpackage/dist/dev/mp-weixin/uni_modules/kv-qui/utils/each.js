"use strict";
function each(object, callback) {
  if (!object)
    return null;
  var type = function() {
    switch (object.constructor) {
      case Object:
        return "Object";
      case Array:
        return "Array";
      case NodeList:
        return "NodeList";
      default:
        return "null";
    }
  }();
  if (type === "Array" || type === "NodeList") {
    [].every.call(
      object,
      (vo, k2) => {
        return callback.call(k2, vo, k2, k2) === false ? false : true;
      }
    );
  } else if (type === "Object") {
    let i = 0;
    for (var k in object) {
      if (callback.call(k, object[k], k, i) === false) {
        break;
      }
      i++;
    }
  }
}
exports.each = each;
