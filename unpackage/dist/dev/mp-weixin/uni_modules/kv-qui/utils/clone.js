"use strict";
function cloneDeep(data, hash = /* @__PURE__ */ new WeakMap()) {
  if (Object(data) !== data)
    return data;
  if (hash.has(data))
    return hash.get(data);
  const result = data instanceof Date ? new Date(data) : data instanceof RegExp ? new RegExp(data.source, data.flags) : data instanceof Set ? /* @__PURE__ */ new Set() : data instanceof Map ? /* @__PURE__ */ new Map() : typeof data.constructor !== "function" ? /* @__PURE__ */ Object.create(null) : data.prototype !== void 0 && typeof data.prototype.constructor === "function" ? data : new data.constructor();
  if (typeof data.constructor === "function" && typeof data.valueOf === "function") {
    const val = data.valueOf();
    if (Object(val) !== val) {
      const result2 = new data.constructor(val);
      hash.set(data, result2);
      return result2;
    }
  }
  hash.set(data, result);
  if (data instanceof Set) {
    data.forEach((val) => {
      result.add(cloneDeep(val, hash));
    });
  } else if (data instanceof Map) {
    data.forEach((val, key) => {
      result.set(key, cloneDeep(val, hash));
    });
  }
  return Object.assign(
    result,
    ...Object.keys(data).map((key) => ({ [key]: cloneDeep(data[key], hash) }))
  );
}
exports.cloneDeep = cloneDeep;
