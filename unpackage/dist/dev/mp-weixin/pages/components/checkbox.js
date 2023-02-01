"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      sex: "",
      sexArr: [{ label: "\u7537\u751F", value: "\u7537", icon: "man" }, { label: "\u5973\u751F", value: "\u5973", icon: "woman" }],
      shape: "",
      shapeArr: ["\u989C\u503C", "\u5B9E\u529B", "\u4E00\u592B", "\u5F53\u5173", "\u4E07\u592B", "\u83AB\u5F00"],
      hobby: "",
      hobbyArr: [
        { label: "\u542C\u97F3\u4E50", value: "\u542C\u97F3\u4E50", uncheckedIcon: "headset" },
        { label: "\u6253\u7BEE\u7403", value: "\u6253\u7BEE\u7403", uncheckedIcon: "sports_basketball" },
        { label: "\u770B\u7535\u5F71", value: "\u770B\u7535\u5F71", uncheckedIcon: "theaters" },
        { label: "\u73A9\u624B\u673A", value: "\u5237\u624B\u673A", uncheckedIcon: "phone" },
        { label: "\u73A9\u624B\u673A", value: "\u73A9\u6E38\u620F", uncheckedIcon: "sports_esports" }
      ],
      sign1: "",
      sign2: "",
      chk0: ["\u5B9E\u529B"],
      chk1: "",
      chk2: "",
      chk3: ""
    };
  }
};
if (!Array) {
  const _easycom_q_radio2 = common_vendor.resolveComponent("q-radio");
  const _easycom_q_banner2 = common_vendor.resolveComponent("q-banner");
  const _easycom_q_separator2 = common_vendor.resolveComponent("q-separator");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_checkbox2 = common_vendor.resolveComponent("q-checkbox");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_radio2 + _easycom_q_banner2 + _easycom_q_separator2 + _component_Lanmu + _easycom_q_checkbox2 + _easycom_q_page2)();
}
const _easycom_q_radio = () => "../../uni_modules/kv-qui/components/q-radio/q-radio.js";
const _easycom_q_banner = () => "../../uni_modules/kv-qui/components/q-banner/q-banner.js";
const _easycom_q_separator = () => "../../uni_modules/kv-qui/components/q-separator/q-separator.js";
const _easycom_q_checkbox = () => "../../uni_modules/kv-qui/components/q-checkbox/q-checkbox.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_radio + _easycom_q_banner + _easycom_q_separator + _easycom_q_checkbox + _easycom_q_page)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.shape = $event),
    b: common_vendor.p({
      options: $data.shapeArr,
      modelValue: $data.shape
    }),
    c: common_vendor.t($data.shape),
    d: common_vendor.p({
      rounded: true,
      className: "bg-orange-3 q-mt-md"
    }),
    e: common_vendor.p({
      spaced: true
    }),
    f: common_vendor.o(($event) => $data.sex = $event),
    g: common_vendor.p({
      options: $data.sexArr,
      modelValue: $data.sex
    }),
    h: common_vendor.t($data.sex),
    i: common_vendor.p({
      rounded: true,
      className: "bg-orange-3 q-mt-md"
    }),
    j: common_vendor.p({
      spaced: true
    }),
    k: common_vendor.o(($event) => $data.hobby = $event),
    l: common_vendor.p({
      options: $data.hobbyArr,
      modelValue: $data.hobby
    }),
    m: common_vendor.t($data.hobby),
    n: common_vendor.p({
      rounded: true,
      className: "bg-orange-3 q-mt-md"
    }),
    o: common_vendor.p({
      title: "Radio"
    }),
    p: common_vendor.o(($event) => $data.sign1 = $event),
    q: common_vendor.p({
      label: "\u8BB0\u4F4F\u5BC6\u7801Boolean",
      className: "q-mb-sm",
      modelValue: $data.sign1
    }),
    r: common_vendor.o(($event) => $data.sign2 = $event),
    s: common_vendor.p({
      val: "ok ok",
      label: "\u8BB0\u4F4F\u5BC6\u7801Value",
      modelValue: $data.sign2
    }),
    t: common_vendor.t($data.sign1),
    v: common_vendor.t($data.sign2),
    w: common_vendor.p({
      rounded: true,
      className: "bg-orange-3 q-mt-md"
    }),
    x: common_vendor.p({
      spaced: true
    }),
    y: common_vendor.o(($event) => $data.chk0 = $event),
    z: common_vendor.p({
      options: $data.shapeArr,
      modelValue: $data.chk0
    }),
    A: common_vendor.t($data.chk0),
    B: common_vendor.p({
      rounded: true,
      className: "bg-orange-3 q-mt-md"
    }),
    C: common_vendor.p({
      spaced: true
    }),
    D: common_vendor.o(($event) => $data.chk1 = $event),
    E: common_vendor.p({
      options: $data.shapeArr,
      ["checked-icon"]: "star",
      modelValue: $data.chk1
    }),
    F: common_vendor.t($data.chk1),
    G: common_vendor.p({
      rounded: true,
      className: "bg-orange-3 q-mt-md"
    }),
    H: common_vendor.p({
      spaced: true
    }),
    I: common_vendor.o(($event) => $data.chk2 = $event),
    J: common_vendor.p({
      options: $data.shapeArr,
      ["checked-icon"]: "star",
      ["unchecked-icon"]: "star_border",
      modelValue: $data.chk2
    }),
    K: common_vendor.t($data.chk2),
    L: common_vendor.p({
      rounded: true,
      className: "bg-orange-3 q-mt-md"
    }),
    M: common_vendor.p({
      spaced: true
    }),
    N: common_vendor.o(($event) => $data.chk3 = $event),
    O: common_vendor.p({
      options: $data.hobbyArr,
      modelValue: $data.chk3
    }),
    P: common_vendor.t($data.chk3),
    Q: common_vendor.p({
      rounded: true,
      className: "bg-orange-3 q-mt-md"
    }),
    R: common_vendor.p({
      title: "Checkbox"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/checkbox.vue"]]);
wx.createPage(MiniProgramPage);
