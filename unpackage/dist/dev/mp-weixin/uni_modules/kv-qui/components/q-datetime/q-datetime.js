"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_components_qDatetime_useDateTime = require("./useDateTime.js");
require("./dateUtils.js");
require("../../utils/clone.js");
require("./Nongli.js");
require("../../utils/format.js");
const _sfc_main = {
  props: {
    ...uni_modules_kvQui_components_qDatetime_useDateTime.useDateTimeProps,
    show: Boolean,
    position: String
  },
  emits: ["update:modelValue", "update:show", "confirm", "change", "open", "close"],
  setup(props, { emit }) {
    const datePosition = common_vendor.computed$1(() => props.position);
    const indicatorStyle = `height: 50px;`;
    const dateTime = uni_modules_kvQui_components_qDatetime_useDateTime.useDateTime({ props, emit });
    function open(evt) {
      emit("update:show", true);
      emit("open", evt);
    }
    function close(evt) {
      emit("update:show", false);
      emit("close", evt);
    }
    function confirm(evt) {
      const { dateVal } = dateTime;
      console.log("confirm", dateVal.value);
      emit("update:modelValue", dateVal.value.text);
      emit("confirm", dateVal);
      close();
    }
    return {
      ...dateTime,
      datePosition,
      indicatorStyle,
      open,
      close,
      confirm
    };
  }
};
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_btn_group2 = common_vendor.resolveComponent("q-btn-group");
  const _easycom_q_pickerview2 = common_vendor.resolveComponent("q-pickerview");
  const _easycom_q_dialog2 = common_vendor.resolveComponent("q-dialog");
  (_easycom_q_btn2 + _easycom_q_btn_group2 + _easycom_q_pickerview2 + _easycom_q_dialog2)();
}
const _easycom_q_btn = () => "../q-btn/q-btn.js";
const _easycom_q_btn_group = () => "../q-btn-group/q-btn-group.js";
const _easycom_q_pickerview = () => "../q-pickerview/q-pickerview.js";
const _easycom_q_dialog = () => "../q-dialog/q-dialog.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_btn_group + _easycom_q_pickerview + _easycom_q_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.close),
    b: common_vendor.p({
      outline: true,
      color: "blue-grey",
      label: "\u53D6\u6D88"
    }),
    c: common_vendor.o(($event) => _ctx.onLifaChange("\u516C")),
    d: common_vendor.p({
      outline: _ctx.lifa !== "\u516C",
      color: "primary",
      label: "\u516C\u5386"
    }),
    e: common_vendor.o(($event) => _ctx.onLifaChange("\u519C")),
    f: common_vendor.p({
      outline: _ctx.lifa !== "\u519C",
      color: "primary",
      label: "\u519C\u5386"
    }),
    g: common_vendor.p({
      flat: true
    }),
    h: common_vendor.o($setup.confirm),
    i: common_vendor.p({
      color: "primary",
      label: "\u786E\u5B9A"
    }),
    j: common_vendor.sr("pickView", "603e6f72-6,603e6f72-0"),
    k: common_vendor.o(_ctx.onDateReady),
    l: common_vendor.o(_ctx.onDateChange),
    m: common_vendor.o(($event) => _ctx.innerValue = $event),
    n: common_vendor.p({
      align: "center",
      options: _ctx.options,
      modelValue: _ctx.innerValue
    }),
    o: common_vendor.sr("rootRef", "603e6f72-0"),
    p: common_vendor.p({
      modelValue: $props.show,
      position: $setup.datePosition,
      persistent: true
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-datetime/q-datetime.vue"]]);
wx.createComponent(Component);
