"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_is = require("../is.js");
const uni_modules_kvQui_utils_each = require("../each.js");
function actions(items, sets) {
  const tags = typeof sets;
  items = items.map((vo) => uni_modules_kvQui_utils_is.isObject(vo) ? vo : { label: vo, value: vo });
  if (tags == "function") {
    sets = { complete: sets };
  } else if (tags == "string") {
    sets = { title: sets };
  }
  sets = uni_modules_kvQui_utils_is.isFunction(sets) ? { complete: sets } : sets;
  const { label, value } = Object.assign({ label: "label", value: "value" }, sets);
  const itemList = items.map((vo) => vo[label]);
  const opts = Object.assign({}, sets, { itemList });
  uni_modules_kvQui_utils_each.each(["success", "fail", "complete"], (key) => {
    const fun = opts[key];
    if (fun && uni_modules_kvQui_utils_is.isFunction(fun)) {
      opts[key] = function(evt) {
        if (evt.errMsg == "showActionSheet:ok") {
          const item = items[evt.tapIndex];
          evt.value = item[value];
          evt.item = item;
        }
        console.log(evt);
        fun.call(this, evt);
      };
    }
  });
  console.log(opts);
  common_vendor.index.showActionSheet(opts);
}
exports.actions = actions;
