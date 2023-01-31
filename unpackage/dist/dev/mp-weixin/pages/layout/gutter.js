"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_separator2 = common_vendor.resolveComponent("q-separator");
  const _easycom_q_avatar2 = common_vendor.resolveComponent("q-avatar");
  (_easycom_q_btn2 + _component_Lanmu + _easycom_q_separator2 + _easycom_q_avatar2)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_separator = () => "../../uni_modules/kv-qui/components/q-separator/q-separator.js";
const _easycom_q_avatar = () => "../../uni_modules/kv-qui/components/q-avatar/q-avatar.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_separator + _easycom_q_avatar)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(7, (n, k0, i0) => {
      return {
        a: `xs-${n}`,
        b: "b9bdb711-1-" + i0 + ",b9bdb711-0"
      };
    }),
    b: common_vendor.p({
      color: "brown",
      label: "Button"
    }),
    c: common_vendor.f(7, (n, k0, i0) => {
      return {
        a: `sm-${n}`,
        b: "b9bdb711-2-" + i0 + ",b9bdb711-0"
      };
    }),
    d: common_vendor.p({
      color: "teal",
      label: "Button"
    }),
    e: common_vendor.f(7, (n, k0, i0) => {
      return {
        a: `md-${n}`,
        b: "b9bdb711-3-" + i0 + ",b9bdb711-0"
      };
    }),
    f: common_vendor.p({
      color: "accent",
      label: "Button"
    }),
    g: common_vendor.f(7, (n, k0, i0) => {
      return {
        a: `lg-${n}`,
        b: "b9bdb711-4-" + i0 + ",b9bdb711-0"
      };
    }),
    h: common_vendor.p({
      color: "red",
      label: "Button"
    }),
    i: common_vendor.f(7, (n, k0, i0) => {
      return {
        a: `xl-${n}`,
        b: "b9bdb711-5-" + i0 + ",b9bdb711-0"
      };
    }),
    j: common_vendor.p({
      color: "indigo",
      label: "Button"
    }),
    k: common_vendor.p({
      title: "Sizes for q-gutter"
    }),
    l: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: `none-${n}`
      };
    }),
    m: common_vendor.p({
      spaced: true
    }),
    n: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: `xs-${n}`
      };
    }),
    o: common_vendor.p({
      spaced: true
    }),
    p: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: `sm-${n}`
      };
    }),
    q: common_vendor.p({
      spaced: true
    }),
    r: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: `md-${n}`
      };
    }),
    s: common_vendor.p({
      spaced: true
    }),
    t: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: `lg-${n}`
      };
    }),
    v: common_vendor.p({
      spaced: true
    }),
    w: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: `xl-${n}`
      };
    }),
    x: common_vendor.p({
      title: "Sizes for q-col-gutter"
    }),
    y: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: `none-${n}`
      };
    }),
    z: common_vendor.p({
      spaced: true
    }),
    A: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: `none-${n}`
      };
    }),
    B: common_vendor.p({
      title: "Sizes for q-gutter"
    }),
    C: common_vendor.p({
      color: "blue"
    }),
    D: common_vendor.p({
      color: "blue"
    }),
    E: common_vendor.p({
      color: "blue"
    }),
    F: common_vendor.p({
      title: "Sizes for q-gutter",
      ["content-class"]: "q-gutter-sm"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b9bdb711"], ["__file", "E:/AppProject/qui-demo/pages/layout/gutter.vue"]]);
wx.createPage(MiniProgramPage);
