"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      progress: [
        { loading: false, percentage: 0 },
        { loading: false, percentage: 0 },
        { loading: false, percentage: 0 }
      ]
    };
  },
  methods: {
    startComputing(i) {
      this.progress[i].loading = true;
      this.progress[i].times = setInterval(() => {
        this.progress[i].percentage += Math.floor(Math.random() * 8 + 10);
        if (this.progress[i].percentage >= 100) {
          clearInterval(this.progress[i].times);
          this.progress[i].loading = false;
          this.progress[i].percentage = 0;
        }
      }, 700);
    },
    onClick(evt) {
      console.log("\u70B9\u51FB\u4E86\uFF01");
    },
    onRippel(evt) {
      this.$refs.ripple.ripple(evt);
    }
  }
};
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_avatar2 = common_vendor.resolveComponent("q-avatar");
  const _easycom_q_spinner2 = common_vendor.resolveComponent("q-spinner");
  const _easycom_q_btn_group2 = common_vendor.resolveComponent("q-btn-group");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_btn2 + _component_Lanmu + _easycom_q_avatar2 + _easycom_q_spinner2 + _easycom_q_btn_group2 + _easycom_q_page2)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_avatar = () => "../../uni_modules/kv-qui/components/q-avatar/q-avatar.js";
const _easycom_q_spinner = () => "../../uni_modules/kv-qui/components/q-spinner/q-spinner.js";
const _easycom_q_btn_group = () => "../../uni_modules/kv-qui/components/q-btn-group/q-btn-group.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_avatar + _easycom_q_spinner + _easycom_q_btn_group + _easycom_q_page)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      color: "primary",
      icon: "mail",
      label: "On Left"
    }),
    b: common_vendor.p({
      color: "secondary",
      ["icon-right"]: "mail",
      label: "On Right"
    }),
    c: common_vendor.p({
      color: "red",
      icon: "mail",
      ["icon-right"]: "send",
      label: "On Left and Right"
    }),
    d: common_vendor.p({
      icon: "phone",
      label: "Stacked",
      stack: true,
      glossy: true,
      color: "purple"
    }),
    e: common_vendor.p({
      title: "With Icon"
    }),
    f: common_vendor.p({
      color: "primary",
      label: "\u5185\u90E8\u8FDE\u63A5",
      to: "/pages/components/card"
    }),
    g: common_vendor.p({
      color: "primary",
      label: "URL\u8FDE\u63A5",
      href: "http://dictbag.com"
    }),
    h: common_vendor.p({
      color: "primary",
      label: "\u5C0F\u7A0B\u5E8F\u8FDE\u63A5",
      mp: "wxa91ff29be8dbb11c://pages/components/btn?id=12"
    }),
    i: common_vendor.p({
      title: "Link"
    }),
    j: common_vendor.p({
      color: "primary",
      icon: "shopping_cart"
    }),
    k: common_vendor.p({
      color: "secondary",
      icon: "navigation"
    }),
    l: common_vendor.p({
      round: true,
      color: "amber",
      glossy: true,
      ["text-color"]: "black",
      icon: "layers_clear"
    }),
    m: common_vendor.p({
      round: true,
      color: "brown-5",
      icon: "directions"
    }),
    n: common_vendor.p({
      round: true,
      color: "deep-orange",
      icon: "edit_location"
    }),
    o: common_vendor.p({
      square: true,
      color: "purple",
      glossy: true,
      icon: "local_grocery_store"
    }),
    p: common_vendor.p({
      square: true,
      color: "black",
      icon: "my_location"
    }),
    q: common_vendor.p({
      size: "42px"
    }),
    r: common_vendor.p({
      round: true
    }),
    s: common_vendor.p({
      title: "Shap"
    }),
    t: common_vendor.p({
      flat: true,
      color: "primary",
      label: "Flat"
    }),
    v: common_vendor.p({
      flat: true,
      rounded: true,
      color: "primary",
      label: "Flat Rounded"
    }),
    w: common_vendor.p({
      flat: true,
      round: true,
      color: "primary",
      icon: "card_giftcard"
    }),
    x: common_vendor.p({
      outline: true,
      color: "primary",
      label: "Outline"
    }),
    y: common_vendor.p({
      outline: true,
      rounded: true,
      color: "primary",
      label: "Outline Rounded"
    }),
    z: common_vendor.p({
      outline: true,
      round: true,
      color: "primary",
      icon: "card_giftcard"
    }),
    A: common_vendor.p({
      push: true,
      color: "primary",
      label: "Push"
    }),
    B: common_vendor.p({
      push: true,
      color: "primary",
      round: true,
      icon: "card_giftcard"
    }),
    C: common_vendor.p({
      push: true,
      color: "white",
      ["text-color"]: "primary",
      label: "Push"
    }),
    D: common_vendor.p({
      push: true,
      color: "white",
      ["text-color"]: "primary",
      round: true,
      icon: "card_giftcard"
    }),
    E: common_vendor.p({
      unelevated: true,
      color: "primary",
      label: "Unelevated"
    }),
    F: common_vendor.p({
      unelevated: true,
      rounded: true,
      color: "primary",
      label: "Unelevated Rounded"
    }),
    G: common_vendor.p({
      unelevated: true,
      round: true,
      color: "primary",
      icon: "card_giftcard"
    }),
    H: common_vendor.p({
      ["no-caps"]: true,
      color: "primary",
      label: "No caps"
    }),
    I: common_vendor.p({
      color: "teal",
      label: "Glossy"
    }),
    J: common_vendor.p({
      rounded: true,
      color: "deep-orange",
      label: "Glossy Rounded"
    }),
    K: common_vendor.p({
      round: true,
      color: "primary",
      icon: "card_giftcard"
    }),
    L: common_vendor.p({
      round: true,
      color: "secondary",
      icon: "local_florist"
    }),
    M: common_vendor.p({
      round: true,
      color: "deep-orange",
      icon: "local_activity"
    }),
    N: common_vendor.p({
      title: "Design"
    }),
    O: common_vendor.o(($event) => $options.startComputing(0)),
    P: common_vendor.p({
      loading: $data.progress[0].loading,
      percentage: $data.progress[0].percentage,
      color: "primary"
    }),
    Q: common_vendor.o(($event) => $options.startComputing(1)),
    R: common_vendor.p({
      round: true,
      loading: $data.progress[1].loading,
      percentage: $data.progress[1].percentage,
      color: "secondary",
      icon: "cloud_upload"
    }),
    S: common_vendor.o(($event) => $options.startComputing(2)),
    T: common_vendor.p({
      unelevated: true,
      loading: $data.progress[2].loading,
      percentage: $data.progress[2].percentage,
      ["dark-percentage"]: true,
      color: "orange",
      ["text-color"]: "grey-9",
      icon: "cloud_upload"
    }),
    U: common_vendor.p({
      title: "\u52A0\u8F7D\u4E0E\u8FDB\u5EA6"
    }),
    V: common_vendor.p({
      push: true,
      label: "First",
      icon: "timeline"
    }),
    W: common_vendor.p({
      push: true,
      label: "Second",
      icon: "visibility"
    }),
    X: common_vendor.p({
      push: true,
      label: "Third",
      icon: "update"
    }),
    Y: common_vendor.p({
      push: true
    }),
    Z: common_vendor.p({
      color: "yellow",
      glossy: true,
      ["text-color"]: "black",
      push: true,
      label: "First",
      icon: "verified_user"
    }),
    aa: common_vendor.p({
      color: "amber",
      glossy: true,
      ["text-color"]: "black",
      push: true,
      label: "Second"
    }),
    ab: common_vendor.p({
      color: "orange",
      glossy: true,
      ["text-color"]: "black",
      push: true,
      label: "Third"
    }),
    ac: common_vendor.p({
      push: true
    }),
    ad: common_vendor.p({
      outline: true,
      color: "brown",
      label: "First"
    }),
    ae: common_vendor.p({
      outline: true,
      color: "brown",
      label: "Second",
      ["icon-right"]: "watch_later"
    }),
    af: common_vendor.p({
      outline: true,
      color: "brown",
      label: "Third"
    }),
    ag: common_vendor.p({
      outline: true
    }),
    ah: common_vendor.p({
      color: "secondary",
      glossy: true,
      label: "First"
    }),
    ai: common_vendor.p({
      color: "secondary",
      glossy: true,
      label: "Second"
    }),
    aj: common_vendor.p({
      color: "secondary",
      glossy: true,
      label: "Third"
    }),
    ak: common_vendor.p({
      color: "secondary",
      glossy: true,
      label: "Fourth"
    }),
    al: common_vendor.p({
      color: "accent",
      icon: "timeline"
    }),
    am: common_vendor.p({
      color: "accent",
      icon: "visibility"
    }),
    an: common_vendor.p({
      color: "accent",
      icon: "update"
    }),
    ao: common_vendor.p({
      color: "amber",
      rounded: true,
      glossy: true,
      icon: "timeline"
    }),
    ap: common_vendor.p({
      color: "amber",
      rounded: true,
      glossy: true,
      icon: "visibility"
    }),
    aq: common_vendor.p({
      color: "amber",
      rounded: true,
      glossy: true,
      ["icon-right"]: "update",
      label: "Update"
    }),
    ar: common_vendor.p({
      rounded: true
    }),
    as: common_vendor.p({
      title: "Button Group"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/btn.vue"]]);
wx.createPage(MiniProgramPage);
