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
  (_easycom_q_input2 + _component_Lanmu)();
}
const _easycom_q_input = () => "../../uni_modules/kv-qui/components/q-input/q-input.js";
if (!Math) {
  _easycom_q_input();
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
      title: "API"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/input.vue"]]);
wx.createPage(MiniProgramPage);
