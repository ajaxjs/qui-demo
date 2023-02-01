"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text: "",
      value: []
    };
  },
  methods: {
    focus() {
      console.log("focus-----");
    }
  }
};
if (!Array) {
  const _easycom_q_input2 = common_vendor.resolveComponent("q-input");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_icon2 = common_vendor.resolveComponent("q-icon");
  const _easycom_q_field2 = common_vendor.resolveComponent("q-field");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_input2 + _component_Lanmu + _easycom_q_icon2 + _easycom_q_field2 + _easycom_q_page2)();
}
const _easycom_q_input = () => "../../uni_modules/kv-qui/components/q-input/q-input.js";
const _easycom_q_icon = () => "../../uni_modules/kv-qui/components/q-icon/q-icon.js";
const _easycom_q_field = () => "../../uni_modules/kv-qui/components/q-field/q-field.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_input + _easycom_q_icon + _easycom_q_field + _easycom_q_page)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.text = $event),
    b: common_vendor.p({
      label: "counter",
      counter: true,
      modelValue: $data.text
    }),
    c: common_vendor.o(($event) => $data.text = $event),
    d: common_vendor.p({
      label: "outlined",
      outlined: true,
      modelValue: $data.text
    }),
    e: common_vendor.o(($event) => $data.text = $event),
    f: common_vendor.p({
      label: "filled & autogrow",
      filled: true,
      autogrow: true,
      modelValue: $data.text
    }),
    g: common_vendor.p({
      title: "Input",
      ["content-class"]: "q-gutter-y-sm"
    }),
    h: common_vendor.o(($event) => $data.text = $event),
    i: common_vendor.p({
      label: "\u8F93\u5165",
      debounce: 800,
      modelValue: $data.text
    }),
    j: common_vendor.p({
      title: "Debounce \u9632\u6296"
    }),
    k: common_vendor.p({
      name: "event"
    }),
    l: common_vendor.t($data.text),
    m: common_vendor.p({
      outlined: true,
      color: "purple-12",
      label: "Label",
      ["stack-label"]: true
    }),
    n: common_vendor.p({
      name: "event",
      color: "orange"
    }),
    o: common_vendor.t($data.text),
    p: common_vendor.p({
      color: "grey-3",
      ["label-color"]: "orange",
      outlined: true,
      label: "Label",
      ["stack-label"]: true
    }),
    q: common_vendor.p({
      name: "place"
    }),
    r: common_vendor.t($data.text),
    s: common_vendor.p({
      name: "close"
    }),
    t: common_vendor.p({
      ["model-value"]: $data.text,
      ["bottom-slots"]: true,
      label: "Label",
      ["stack-label"]: true,
      counter: true
    }),
    v: common_vendor.p({
      name: "event"
    }),
    w: common_vendor.t($data.text),
    x: common_vendor.p({
      color: "lime-11",
      ["bg-color"]: "green",
      filled: true,
      label: "Label",
      ["stack-label"]: true
    }),
    y: common_vendor.p({
      title: "Field \u5305\u88F9\u5668"
    }),
    z: common_vendor.p({
      title: "API"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/input.vue"]]);
wx.createPage(MiniProgramPage);
