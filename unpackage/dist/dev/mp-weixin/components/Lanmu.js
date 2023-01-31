"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    title: String,
    contentClass: String,
    contentStyle: String
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.n($props.contentClass),
    c: common_vendor.s($props.contentStyle)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/components/Lanmu.vue"]]);
wx.createComponent(Component);
