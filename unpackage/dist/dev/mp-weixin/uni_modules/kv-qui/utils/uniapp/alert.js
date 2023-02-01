"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_each = require("../each.js");
function alert(content) {
  const opts = { content };
  uni_modules_kvQui_utils_each.each(arguments, (vo, k) => {
    if (k > 0) {
      const tag = typeof vo;
      if (tag == "string") {
        opts.title = vo;
      } else if (Array.isArray(vo)) {
        let btnTp = ["cancel", "confirm"];
        vo = vo.splice(0, 2);
        opts.showCancel = vo.length == 2 && vo[0] ? true : false;
        if (vo.length == 1)
          vo.unshift(null);
        uni_modules_kvQui_utils_each.each(vo, (text, i) => {
          const btn = typeof text == "string" ? { text } : text;
          if (btn && btn["text"])
            opts[btnTp[i] + "Text"] = btn["text"];
          if (btn && btn["color"])
            opts[btnTp[i] + "Color"] = btn["color"];
        });
      } else if (tag == "function") {
        opts.success = vo;
      }
    }
  });
  common_vendor.index.showModal(opts);
}
exports.alert = alert;
