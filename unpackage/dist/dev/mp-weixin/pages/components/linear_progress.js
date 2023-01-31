"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const progress = common_vendor.ref(0.4);
    return {
      progress,
      randomize() {
        progress.value = Math.random();
      }
    };
  }
};
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_linear_progress2 = common_vendor.resolveComponent("q-linear-progress");
  const _easycom_q_separator2 = common_vendor.resolveComponent("q-separator");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  (_easycom_q_btn2 + _easycom_q_linear_progress2 + _easycom_q_separator2 + _component_Lanmu)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_linear_progress = () => "../../uni_modules/kv-qui/components/q-linear-progress/q-linear-progress.js";
const _easycom_q_separator = () => "../../uni_modules/kv-qui/components/q-separator/q-separator.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_linear_progress + _easycom_q_separator)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.randomize),
    b: common_vendor.p({
      size: "sm",
      color: "primary",
      label: "Change Model"
    }),
    c: common_vendor.p({
      value: $setup.progress
    }),
    d: common_vendor.p({
      value: $setup.progress,
      color: "warning"
    }),
    e: common_vendor.p({
      value: $setup.progress,
      color: "secondary"
    }),
    f: common_vendor.p({
      value: $setup.progress,
      rounded: true,
      color: "accent"
    }),
    g: common_vendor.p({
      value: $setup.progress,
      rounded: true,
      color: "purple",
      ["track-color"]: "orange"
    }),
    h: common_vendor.p({
      value: $setup.progress,
      rounded: true,
      color: "negative"
    }),
    i: common_vendor.p({
      spaced: true
    }),
    j: common_vendor.p({
      reverse: true,
      value: $setup.progress
    }),
    k: common_vendor.p({
      reverse: true,
      value: $setup.progress,
      color: "warning"
    }),
    l: common_vendor.p({
      reverse: true,
      value: $setup.progress,
      color: "secondary"
    }),
    m: common_vendor.p({
      title: "Determined state"
    }),
    n: common_vendor.p({
      size: "10px",
      value: $setup.progress
    }),
    o: common_vendor.p({
      rounded: true,
      size: "20px",
      value: $setup.progress,
      color: "warning"
    }),
    p: common_vendor.p({
      rounded: true,
      size: "15px",
      value: $setup.progress,
      color: "secondary"
    }),
    q: common_vendor.p({
      size: "25px",
      value: $setup.progress,
      color: "accent"
    }),
    r: common_vendor.p({
      spaced: true
    }),
    s: common_vendor.f(["xs", "sm", "md", "lg", "xl"], (size, i, i0) => {
      return {
        a: size,
        b: common_vendor.o($setup.randomize, size),
        c: "3b0b5282-18-" + i0 + ",3b0b5282-12",
        d: common_vendor.p({
          size,
          value: $setup.progress,
          color: "primary"
        })
      };
    }),
    t: common_vendor.p({
      spaced: true
    }),
    v: common_vendor.p({
      stripe: true,
      size: "10px",
      value: $setup.progress
    }),
    w: common_vendor.p({
      stripe: true,
      rounded: true,
      size: "20px",
      value: $setup.progress * 1.2,
      color: "warning"
    }),
    x: common_vendor.p({
      title: "Custom",
      ["content-class"]: "q-gutter-y-sm"
    }),
    y: common_vendor.p({
      indeterminate: true
    }),
    z: common_vendor.p({
      indeterminate: true,
      color: "warning"
    }),
    A: common_vendor.p({
      indeterminate: true,
      color: "secondary"
    }),
    B: common_vendor.p({
      indeterminate: true,
      rounded: true,
      color: "accent"
    }),
    C: common_vendor.p({
      spaced: true
    }),
    D: common_vendor.p({
      query: true,
      ["track-color"]: "orange",
      color: "purple"
    }),
    E: common_vendor.p({
      query: true,
      color: "negative"
    }),
    F: common_vendor.p({
      title: "Indeterminate state"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/linear_progress.vue"]]);
wx.createPage(MiniProgramPage);
