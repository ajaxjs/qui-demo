"use strict";
const common_vendor = require("../../../../common/vendor.js");
function toast(title, sets) {
  const iconArr = ["success", "error", "fail", "exception", "loading", "none"];
  const tags = typeof sets;
  const opts = { title };
  if (tags == "object") {
    Object.assign(opts, sets);
  } else if (tags == "string" && iconArr.includes(sets)) {
    opts.icon = sets;
  } else if (tags == "string") {
    opts.image = sets;
  } else if (tags == "number") {
    opts.duration = sets;
  } else if (tags == "boolean") {
    opts.mask = sets;
  } else if (tags == "function") {
    opts.complete = sets;
  }
  common_vendor.index.showToast(opts);
}
exports.toast = toast;
