"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Card Title",
      subTitle: "Subtitle by Kevin",
      lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  }
};
if (!Array) {
  const _easycom_q_card_section2 = common_vendor.resolveComponent("q-card-section");
  const _easycom_q_card2 = common_vendor.resolveComponent("q-card");
  const _easycom_q_separator2 = common_vendor.resolveComponent("q-separator");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_card_actions2 = common_vendor.resolveComponent("q-card-actions");
  const _easycom_q_img2 = common_vendor.resolveComponent("q-img");
  const _easycom_q_item_section2 = common_vendor.resolveComponent("q-item-section");
  const _easycom_q_item2 = common_vendor.resolveComponent("q-item");
  const _easycom_q_list2 = common_vendor.resolveComponent("q-list");
  const _easycom_q_menu2 = common_vendor.resolveComponent("q-menu");
  const _easycom_q_avatar2 = common_vendor.resolveComponent("q-avatar");
  const _easycom_q_item_label2 = common_vendor.resolveComponent("q-item-label");
  (_easycom_q_card_section2 + _easycom_q_card2 + _easycom_q_separator2 + _component_Lanmu + _easycom_q_btn2 + _easycom_q_card_actions2 + _easycom_q_img2 + _easycom_q_item_section2 + _easycom_q_item2 + _easycom_q_list2 + _easycom_q_menu2 + _easycom_q_avatar2 + _easycom_q_item_label2)();
}
const _easycom_q_card_section = () => "../../uni_modules/kv-qui/components/q-card-section/q-card-section.js";
const _easycom_q_card = () => "../../uni_modules/kv-qui/components/q-card/q-card.js";
const _easycom_q_separator = () => "../../uni_modules/kv-qui/components/q-separator/q-separator.js";
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_card_actions = () => "../../uni_modules/kv-qui/components/q-card-actions/q-card-actions.js";
const _easycom_q_img = () => "../../uni_modules/kv-qui/components/q-img/q-img.js";
const _easycom_q_item_section = () => "../../uni_modules/kv-qui/components/q-item-section/q-item-section.js";
const _easycom_q_item = () => "../../uni_modules/kv-qui/components/q-item/q-item.js";
const _easycom_q_list = () => "../../uni_modules/kv-qui/components/q-list/q-list.js";
const _easycom_q_menu = () => "../../uni_modules/kv-qui/components/q-menu/q-menu.js";
const _easycom_q_avatar = () => "../../uni_modules/kv-qui/components/q-avatar/q-avatar.js";
const _easycom_q_item_label = () => "../../uni_modules/kv-qui/components/q-item-label/q-item-label.js";
if (!Math) {
  (_easycom_q_card_section + _easycom_q_card + _easycom_q_separator + _easycom_q_btn + _easycom_q_card_actions + _easycom_q_img + _easycom_q_item_section + _easycom_q_item + _easycom_q_list + _easycom_q_menu + _easycom_q_avatar + _easycom_q_item_label)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.lorem),
    b: common_vendor.t($data.title),
    c: common_vendor.t($data.subTitle),
    d: common_vendor.t($data.lorem),
    e: common_vendor.p({
      className: "my-card text-white card-blue"
    }),
    f: common_vendor.t($data.title),
    g: common_vendor.t($data.subTitle),
    h: common_vendor.p({
      dark: true,
      inset: true
    }),
    i: common_vendor.t($data.lorem),
    j: common_vendor.p({
      dark: true,
      bordered: true,
      className: "bg-grey-9 my-card"
    }),
    k: common_vendor.t($data.lorem),
    l: common_vendor.p({
      inset: true
    }),
    m: common_vendor.t($data.lorem),
    n: common_vendor.p({
      flat: true,
      bordered: true,
      className: "my-card"
    }),
    o: common_vendor.p({
      title: "Base"
    }),
    p: common_vendor.t($data.lorem),
    q: common_vendor.p({
      dark: true
    }),
    r: common_vendor.p({
      flat: true
    }),
    s: common_vendor.p({
      flat: true
    }),
    t: common_vendor.p({
      className: "my-card bg-secondary text-white"
    }),
    v: common_vendor.p({
      flat: true
    }),
    w: common_vendor.p({
      flat: true
    }),
    x: common_vendor.p({
      vertical: true
    }),
    y: common_vendor.p({
      flat: true
    }),
    z: common_vendor.p({
      flat: true
    }),
    A: common_vendor.p({
      className: "my-card bg-purple text-white"
    }),
    B: common_vendor.t($data.lorem),
    C: common_vendor.p({
      src: "https://cdn.quasar.dev/img/parallax2.jpg"
    }),
    D: common_vendor.p({
      clickable: true
    }),
    E: common_vendor.p({
      clickable: true
    }),
    F: common_vendor.p({
      clickable: true
    }),
    G: common_vendor.p({
      cover: true,
      ["auto-close"]: true
    }),
    H: common_vendor.p({
      color: "grey-7",
      round: true,
      flat: true,
      icon: "more_vert"
    }),
    I: common_vendor.t($data.lorem),
    J: common_vendor.p({
      flat: true
    }),
    K: common_vendor.p({
      flat: true
    }),
    L: common_vendor.p({
      flat: true,
      bordered: true
    }),
    M: common_vendor.p({
      title: "With Actions"
    }),
    N: common_vendor.p({
      src: "https://cdn.quasar.dev/img/parallax2.jpg"
    }),
    O: common_vendor.p({
      horizontal: true
    }),
    P: common_vendor.p({
      flat: true,
      round: true,
      icon: "event"
    }),
    Q: common_vendor.p({
      flat: true
    }),
    R: common_vendor.p({
      flat: true,
      color: "primary"
    }),
    S: common_vendor.p({
      flat: true,
      bordered: true
    }),
    T: common_vendor.p({
      avatar: true
    }),
    U: common_vendor.p({
      caption: true
    }),
    V: common_vendor.t($data.lorem),
    W: common_vendor.p({
      vertical: true
    }),
    X: common_vendor.p({
      horizontal: true
    }),
    Y: common_vendor.p({
      flat: true,
      bordered: true
    }),
    Z: common_vendor.p({
      src: "https://cdn.quasar.dev/img/parallax1.jpg"
    }),
    aa: common_vendor.t($data.lorem),
    ab: common_vendor.p({
      horizontal: true
    }),
    ac: common_vendor.p({
      flat: true,
      round: true,
      icon: "event"
    }),
    ad: common_vendor.p({
      flat: true
    }),
    ae: common_vendor.p({
      flat: true
    }),
    af: common_vendor.p({
      flat: true,
      color: "primary"
    }),
    ag: common_vendor.p({
      src: "https://cdn.quasar.dev/img/parallax2.jpg"
    }),
    ah: common_vendor.p({
      flat: true,
      round: true,
      color: "red",
      icon: "favorite"
    }),
    ai: common_vendor.p({
      flat: true,
      round: true,
      color: "accent",
      icon: "bookmark"
    }),
    aj: common_vendor.p({
      flat: true,
      round: true,
      color: "primary",
      icon: "share"
    }),
    ak: common_vendor.p({
      vertical: true
    }),
    al: common_vendor.p({
      horizontal: true
    }),
    am: common_vendor.p({
      title: "Basic horizontal"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/card.vue"]]);
wx.createPage(MiniProgramPage);
