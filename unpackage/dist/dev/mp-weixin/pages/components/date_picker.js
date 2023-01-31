"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    const dateValue = [1990, 6, 16, 12, 32];
    return {
      dateValue,
      objValue: null,
      showData: false,
      date: null,
      optObject: [
        [{ label: "\u4E2D\u56FD", value: "\u4E2D" }, { label: "\u7F8E\u56FD", value: "\u7F8E" }, { label: "\u5DF4\u897F", value: "\u5DF4" }, { label: "\u65E5\u672C", value: "\u65E5" }, { label: "\u5FB7\u56FD", value: "\u5FB7" }],
        [{ label: "\u8DB3\u7403", value: "A" }, { label: "\u6392\u7403", value: "B" }, { label: "\u7FBD\u6BDB\u7403", value: "C" }, { label: "\u4E52\u4E53\u7403", value: "D" }]
      ]
    };
  },
  methods: {
    onChange(evt) {
      console.log("change--", evt);
    }
  }
};
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_datetime2 = common_vendor.resolveComponent("q-datetime");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  (_easycom_q_btn2 + _easycom_q_datetime2 + _component_Lanmu)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_datetime = () => "../../uni_modules/kv-qui/components/q-datetime/q-datetime.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_datetime)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.$refs.picker.open()),
    b: common_vendor.p({
      color: "blue",
      label: "\u9009\u62E9\u65E5\u671F"
    }),
    c: common_vendor.t($data.date),
    d: common_vendor.sr("picker", "058eb83a-2,058eb83a-0"),
    e: common_vendor.o(($event) => $data.date = $event),
    f: common_vendor.o(($event) => $data.showData = $event),
    g: common_vendor.p({
      defaults: "\u519C\u5386 2001-04-05 02:04 (\u95F0\u6708)",
      modelValue: $data.date,
      show: $data.showData
    }),
    h: common_vendor.t($data.dateValue),
    i: common_vendor.o(($event) => $data.dateValue = [1982, 3, 6, 18, 42]),
    j: common_vendor.p({
      label: "change"
    }),
    k: common_vendor.p({
      title: "Picker View"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/date_picker.vue"]]);
wx.createPage(MiniProgramPage);
