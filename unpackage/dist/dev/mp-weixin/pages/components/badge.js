"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_q_badge2 = common_vendor.resolveComponent("q-badge");
  const _easycom_q_icon2 = common_vendor.resolveComponent("q-icon");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_separator2 = common_vendor.resolveComponent("q-separator");
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_badge2 + _easycom_q_icon2 + _component_Lanmu + _easycom_q_separator2 + _easycom_q_btn2 + _easycom_q_page2)();
}
const _easycom_q_badge = () => "../../uni_modules/kv-qui/components/q-badge/q-badge.js";
const _easycom_q_icon = () => "../../uni_modules/kv-qui/components/q-icon/q-icon.js";
const _easycom_q_separator = () => "../../uni_modules/kv-qui/components/q-separator/q-separator.js";
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_badge + _easycom_q_icon + _easycom_q_separator + _easycom_q_btn + _easycom_q_page)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      color: "blue"
    }),
    b: common_vendor.p({
      color: "orange",
      ["text-color"]: "black",
      label: "2"
    }),
    c: common_vendor.p({
      name: "bluetooth",
      color: "white"
    }),
    d: common_vendor.p({
      color: "purple"
    }),
    e: common_vendor.p({
      name: "warning",
      color: "white"
    }),
    f: common_vendor.p({
      color: "red"
    }),
    g: common_vendor.p({
      color: "primary"
    }),
    h: common_vendor.p({
      color: "primary"
    }),
    i: common_vendor.p({
      title: "Basic"
    }),
    j: common_vendor.p({
      align: "top"
    }),
    k: common_vendor.p({
      align: "middle"
    }),
    l: common_vendor.p({
      align: "bottom"
    }),
    m: common_vendor.p({
      title: "Aligned"
    }),
    n: common_vendor.p({
      color: "orange",
      floating: true
    }),
    o: common_vendor.p({
      push: true,
      color: "white",
      ["text-color"]: "primary",
      label: "Unread Mails"
    }),
    p: common_vendor.p({
      color: "red",
      floating: true
    }),
    q: common_vendor.p({
      dense: true,
      color: "purple",
      round: true,
      icon: "email"
    }),
    r: common_vendor.p({
      color: "orange",
      floating: true,
      transparent: true
    }),
    s: common_vendor.p({
      color: "teal",
      size: "sm",
      label: "Unread Mails"
    }),
    t: common_vendor.p({
      color: "red",
      floating: true,
      transparent: true
    }),
    v: common_vendor.p({
      dense: true,
      round: true,
      flat: true,
      icon: "email"
    }),
    w: common_vendor.p({
      transparent: true,
      align: "middle",
      color: "orange"
    }),
    x: common_vendor.p({
      title: "Floating & Transparent"
    }),
    y: common_vendor.p({
      outline: true,
      color: "primary",
      label: "Outline"
    }),
    z: common_vendor.p({
      outline: true,
      color: "orange",
      label: "Outline"
    }),
    A: common_vendor.p({
      outline: true,
      color: "secondary",
      label: "Outline"
    }),
    B: common_vendor.p({
      outline: true,
      align: "middle",
      color: "teal"
    }),
    C: common_vendor.p({
      rounded: true,
      color: "red",
      label: "1"
    }),
    D: common_vendor.p({
      rounded: true,
      color: "primary",
      label: "999+"
    }),
    E: common_vendor.p({
      rounded: true,
      color: "orange",
      label: "Round"
    }),
    F: common_vendor.p({
      rounded: true,
      color: "yellow"
    }),
    G: common_vendor.p({
      rounded: true,
      color: "green"
    }),
    H: common_vendor.p({
      rounded: true,
      color: "red"
    }),
    I: common_vendor.p({
      floating: true,
      color: "red",
      rounded: true
    }),
    J: common_vendor.p({
      round: true,
      icon: "notifications"
    }),
    K: common_vendor.p({
      color: "red",
      rounded: true,
      floating: true
    }),
    L: common_vendor.p({
      color: "blue"
    }),
    M: common_vendor.p({
      color: "blue",
      rounded: true
    }),
    N: common_vendor.p({
      title: "Style"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/badge.vue"]]);
wx.createPage(MiniProgramPage);
