"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_is = require("../is.js");
function encode(value) {
  if (uni_modules_kvQui_utils_is.isDate(value) === true) {
    return "__q_date|" + value.toUTCString();
  }
  if (uni_modules_kvQui_utils_is.isRegexp(value) === true) {
    return "__q_expr|" + value.source;
  }
  if (typeof value === "number") {
    return "__q_numb|" + value;
  }
  if (typeof value === "boolean") {
    return "__q_bool|" + (value ? "1" : "0");
  }
  if (typeof value === "string") {
    return "__q_strn|" + value;
  }
  if (typeof value === "function") {
    return "__q_strn|" + value.toString();
  }
  if (value === Object(value)) {
    return "__q_objt|" + JSON.stringify(value);
  }
  return value;
}
function decode(value) {
  const length = value.length;
  if (length < 9) {
    return value;
  }
  const type = value.substring(0, 8);
  const source = value.substring(9);
  switch (type) {
    case "__q_date":
      return new Date(source);
    case "__q_expr":
      return new RegExp(source);
    case "__q_numb":
      return Number(source);
    case "__q_bool":
      return Boolean(source === "1");
    case "__q_strn":
      return "" + source;
    case "__q_objt":
      return JSON.parse(source);
    default:
      return value;
  }
}
function getStorage() {
  const webStorage = () => common_vendor.index.getStorageInfoSync();
  const get = (key) => {
    const item = common_vendor.index.getStorageSync(key);
    return item ? decode(item) : null;
  };
  return {
    has: (key) => get(key) !== "",
    getLength: () => webStorage().keys.length,
    getItem: get,
    getIndex: (index) => index < webStorage().keys.length ? get(webStorage().keys[index]) : null,
    getKey: (index) => index < webStorage().keys.length ? webStorage().keys[index] : null,
    getAll: () => {
      let key;
      const result = {}, len = webStorage().keys.length;
      for (let i = 0; i < len; i++) {
        key = webStorage().keys[i];
        result[key] = get(key);
      }
      return result;
    },
    getAllKeys: () => webStorage().keys,
    set: (key, value) => {
      common_vendor.index.setStorageSync(key, encode(value));
    },
    remove: (key) => {
      common_vendor.index.removeStorageSync(key);
    },
    clear: () => {
      common_vendor.index.clearStorageSync();
    },
    isEmpty: () => webStorage().keys.length === 0
  };
}
exports.getStorage = getStorage;
