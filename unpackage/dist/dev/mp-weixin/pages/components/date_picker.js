"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../uni_modules/kv-qui/components/q-picker/usePicker.js");
require("../../uni_modules/kv-qui/components/q-pickerview/usePickerview.js");
const _sfc_main = {
  data() {
    return {
      pkShow: false,
      pkVals: null,
      objValue: null,
      showData: false,
      date: "\u519C\u5386 2001-04-05 02:04 (\u95F0\u6708)",
      optObject: [
        [{ label: "\u4E2D\u56FD", value: "China" }, { label: "\u7F8E\u56FD", value: "America" }, { label: "\u5DF4\u897F", value: "Brazil" }, { label: "\u65E5\u672C", value: "Japan" }, { label: "\u5FB7\u56FD", value: "Germany" }],
        [{ label: "\u8DB3\u7403", value: "FootBall" }, { label: "\u6392\u7403", value: "Volleyball" }, { label: "\u7FBD\u6BDB\u7403", value: "Badminton" }, { label: "\u4E52\u4E53\u7403", value: "TableTennis" }]
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
  const _easycom_q_separator2 = common_vendor.resolveComponent("q-separator");
  const _easycom_q_datetime2 = common_vendor.resolveComponent("q-datetime");
  const _easycom_q_picker2 = common_vendor.resolveComponent("q-picker");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_pickerview2 = common_vendor.resolveComponent("q-pickerview");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_btn2 + _easycom_q_separator2 + _easycom_q_datetime2 + _easycom_q_picker2 + _component_Lanmu + _easycom_q_pickerview2 + _easycom_q_page2)();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_separator = () => "../../uni_modules/kv-qui/components/q-separator/q-separator.js";
const _easycom_q_datetime = () => "../../uni_modules/kv-qui/components/q-datetime/q-datetime.js";
const _easycom_q_picker = () => "../../uni_modules/kv-qui/components/q-picker/q-picker.js";
const _easycom_q_pickerview = () => "../../uni_modules/kv-qui/components/q-pickerview/q-pickerview.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_separator + _easycom_q_datetime + _easycom_q_picker + _easycom_q_pickerview + _easycom_q_page)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(($event) => $data.pkShow = true),
    b: common_vendor.p({
      color: "blue",
      label: "\u5F39\u51FA\u9009\u62E9"
    }),
    c: common_vendor.t($data.pkVals),
    d: common_vendor.p({
      spaced: true
    }),
    e: common_vendor.o(($event) => _ctx.$refs.picker.open()),
    f: common_vendor.p({
      color: "blue",
      label: "\u65E5\u671F\u9009\u62E9"
    }),
    g: common_vendor.t($data.date),
    h: common_vendor.sr("picker", "058eb83a-5,058eb83a-1"),
    i: common_vendor.o(($event) => $data.date = $event),
    j: common_vendor.o(($event) => $data.showData = $event),
    k: common_vendor.p({
      modelValue: $data.date,
      show: $data.showData
    }),
    l: common_vendor.o(($event) => $data.pkVals = $event),
    m: common_vendor.o(($event) => $data.pkShow = $event),
    n: common_vendor.p({
      options: $data.optObject,
      title: "\u8BF7\u9009\u62E9",
      modelValue: $data.pkVals,
      show: $data.pkShow
    }),
    o: common_vendor.p({
      title: "\u65E5\u671F\u9009\u62E9\u5668"
    }),
    p: common_vendor.p({
      spaced: true
    }),
    q: common_vendor.o(($event) => $data.objValue = ["America", "Badminton"]),
    r: common_vendor.p({
      color: "orange",
      label: "\u8BBE\u7F6E\u9ED8\u8BA4\u503C"
    }),
    s: $data.objValue
  }, $data.objValue ? {
    t: common_vendor.t($data.objValue[0]),
    v: common_vendor.t($data.objValue[1])
  } : {}, {
    w: common_vendor.sr("b", "058eb83a-10,058eb83a-7"),
    x: common_vendor.o($options.onChange),
    y: common_vendor.o(($event) => $data.objValue = $event),
    z: common_vendor.p({
      options: $data.optObject,
      modelValue: $data.objValue
    }),
    A: common_vendor.p({
      title: "Picker View"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/date_picker.vue"]]);
wx.createPage(MiniProgramPage);
