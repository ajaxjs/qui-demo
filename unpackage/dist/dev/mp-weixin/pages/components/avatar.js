"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_q_avatar2 = common_vendor.resolveComponent("q-avatar");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  (_easycom_q_avatar2 + _component_Lanmu)();
}
const _easycom_q_avatar = () => "../../uni_modules/kv-qui/components/q-avatar/q-avatar.js";
if (!Math) {
  _easycom_q_avatar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      color: "red",
      ["text-color"]: "white",
      icon: "directions"
    }),
    b: common_vendor.p({
      color: "primary",
      ["text-color"]: "white"
    }),
    c: common_vendor.p({
      size: "100px",
      ["font-size"]: "52px",
      color: "teal",
      ["text-color"]: "white",
      icon: "directions"
    }),
    d: common_vendor.p({
      size: "24px",
      color: "orange"
    }),
    e: common_vendor.p({
      title: "Basic",
      ["content-class"]: "row q-gutter-sm"
    }),
    f: common_vendor.p({
      square: true,
      color: "red",
      ["text-color"]: "white"
    }),
    g: common_vendor.p({
      color: "red",
      ["text-color"]: "white",
      icon: "person"
    }),
    h: common_vendor.p({
      rounded: true,
      color: "blue",
      ["text-color"]: "white",
      icon: "directions"
    }),
    i: common_vendor.p({
      title: "Shap",
      ["content-class"]: "row q-gutter-sm"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/avatar.vue"]]);
wx.createPage(MiniProgramPage);
