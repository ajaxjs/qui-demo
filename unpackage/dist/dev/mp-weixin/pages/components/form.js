"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      statusOpt: [
        { label: "\u5728\u7EBF", value: "\u5728\u7EBF", icon: "emoji_emotions" },
        { label: "\u79BB\u7EBF", value: "\u79BB\u7EBF", icon: "sentiment_neutral" },
        { label: "\u52FF\u6270", value: "\u52FF\u6270", icon: "block" }
      ],
      hobby: [
        { label: "\u542C\u97F3\u4E50", value: "\u542C\u97F3\u4E50", uncheckedIcon: "headset" },
        { label: "\u6253\u7BEE\u7403", value: "\u6253\u7BEE\u7403", uncheckedIcon: "sports_basketball" },
        { label: "\u770B\u7535\u5F71", value: "\u770B\u7535\u5F71", uncheckedIcon: "theaters" },
        { label: "\u73A9\u624B\u673A", value: "\u5237\u624B\u673A", uncheckedIcon: "phone" },
        { label: "\u73A9\u624B\u673A", value: "\u73A9\u6E38\u620F", uncheckedIcon: "sports_esports" }
      ],
      prms: {},
      info: {
        hobby: ["\u770B\u7535\u5F71"]
      }
    };
  },
  methods: {
    submit(evt) {
      console.log("submit", evt);
    }
  }
};
if (!Array) {
  const _easycom_q_input2 = common_vendor.resolveComponent("q-input");
  const _easycom_q_checkbox2 = common_vendor.resolveComponent("q-checkbox");
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_form2 = common_vendor.resolveComponent("q-form");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_datetime2 = common_vendor.resolveComponent("q-datetime");
  const _easycom_q_field2 = common_vendor.resolveComponent("q-field");
  const _easycom_q_radio2 = common_vendor.resolveComponent("q-radio");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_input2 + _easycom_q_checkbox2 + _easycom_q_btn2 + _easycom_q_form2 + _component_Lanmu + _easycom_q_datetime2 + _easycom_q_field2 + _easycom_q_radio2 + _easycom_q_page2)();
}
const _easycom_q_input = () => "../../uni_modules/kv-qui/components/q-input/q-input.js";
const _easycom_q_checkbox = () => "../../uni_modules/kv-qui/components/q-checkbox/q-checkbox.js";
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
const _easycom_q_form = () => "../../uni_modules/kv-qui/components/q-form/q-form.js";
const _easycom_q_datetime = () => "../../uni_modules/kv-qui/components/q-datetime/q-datetime.js";
const _easycom_q_field = () => "../../uni_modules/kv-qui/components/q-field/q-field.js";
const _easycom_q_radio = () => "../../uni_modules/kv-qui/components/q-radio/q-radio.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_input + _easycom_q_checkbox + _easycom_q_btn + _easycom_q_form + _easycom_q_datetime + _easycom_q_field + _easycom_q_radio + _easycom_q_page)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.prms.username = $event),
    b: common_vendor.p({
      label: "\u7528\u6237\u540D",
      outlined: true,
      modelValue: $data.prms.username
    }),
    c: common_vendor.o(($event) => $data.prms.password = $event),
    d: common_vendor.p({
      label: "\u5BC6\u7801",
      outlined: true,
      password: true,
      modelValue: $data.prms.password
    }),
    e: common_vendor.o(($event) => $data.prms.remember = $event),
    f: common_vendor.p({
      val: 1,
      label: "\u8BB0\u4F4F\u5BC6\u7801",
      modelValue: $data.prms.remember
    }),
    g: common_vendor.p({
      type: "submit",
      label: "\u7ACB\u5373\u63D0\u4EA4",
      color: "primary"
    }),
    h: common_vendor.p({
      type: "reset",
      label: "\u91CD\u7F6E\u8868\u5355",
      color: "green"
    }),
    i: common_vendor.p({
      className: "myform q-gutter-md"
    }),
    j: common_vendor.t(JSON.stringify($data.prms)),
    k: common_vendor.p({
      title: "\u7528\u6237\u767B\u5F55"
    }),
    l: common_vendor.o(($event) => $data.info.username = $event),
    m: common_vendor.p({
      label: "\u7528\u6237\u6635\u79F0",
      outlined: true,
      modelValue: $data.info.username
    }),
    n: common_vendor.o(($event) => $data.info.phone = $event),
    o: common_vendor.p({
      type: "tel",
      label: "\u7535\u8BDD\u53F7\u7801",
      outlined: true,
      modelValue: $data.info.phone
    }),
    p: common_vendor.o(($event) => $data.info.born = $event),
    q: common_vendor.p({
      modelValue: $data.info.born
    }),
    r: common_vendor.p({
      outlined: true,
      label: "\u751F\u65E5",
      ["stack-label"]: $data.info.born ? true : false
    }),
    s: common_vendor.o(($event) => $data.info.sex = $event),
    t: common_vendor.p({
      options: ["\u7537", "\u5973"],
      ["checked-icon"]: "task_alt",
      ["unchecked-icon"]: "highlight_off",
      modelValue: $data.info.sex
    }),
    v: common_vendor.p({
      outlined: true,
      label: "\u7528\u6237\u6027\u522B",
      ["stack-label"]: true
    }),
    w: common_vendor.o(($event) => $data.info.status = $event),
    x: common_vendor.p({
      options: $data.statusOpt,
      modelValue: $data.info.status
    }),
    y: common_vendor.p({
      outlined: true,
      label: "\u72B6\u6001",
      ["stack-label"]: true
    }),
    z: common_vendor.o(($event) => $data.info.hobby = $event),
    A: common_vendor.p({
      options: $data.hobby,
      modelValue: $data.info.hobby
    }),
    B: common_vendor.p({
      outlined: true,
      label: "\u5174\u8DA3\u7231\u597D",
      ["stack-label"]: true,
      autogrow: true
    }),
    C: common_vendor.o(($event) => $data.info.tags = $event),
    D: common_vendor.p({
      options: ["\u989C\u503C\u62C5\u5F53", "\u5B9E\u529B\u4E0D\u51E1", "\u4E00\u592B\u5F53\u5173", "\u4E07\u592B\u83AB\u5F00"],
      modelValue: $data.info.tags
    }),
    E: common_vendor.p({
      outlined: true,
      label: "\u6807\u7B7E",
      ["stack-label"]: true,
      autogrow: true
    }),
    F: common_vendor.p({
      className: "myform q-gutter-md"
    }),
    G: common_vendor.t(JSON.stringify($data.info)),
    H: common_vendor.p({
      title: "\u7528\u6237\u8D44\u6599"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/form.vue"]]);
wx.createPage(MiniProgramPage);
