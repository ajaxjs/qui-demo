"use strict";
const uni_modules_kvQui_components_qPicker_usePicker = require("./usePicker.js");
const common_vendor = require("../../../../common/vendor.js");
require("../q-pickerview/usePickerview.js");
const _sfc_main = {
  props: {
    ...uni_modules_kvQui_components_qPicker_usePicker.usePickerProps
  },
  emits: ["update:modelValue", "update:show", "confirm", "change", "open", "close"],
  setup(props, { emit }) {
    return uni_modules_kvQui_components_qPicker_usePicker.usePicker({ props, emit });
  }
};
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  const _easycom_q_pickerview2 = common_vendor.resolveComponent("q-pickerview");
  const _easycom_q_dialog2 = common_vendor.resolveComponent("q-dialog");
  (_easycom_q_btn2 + _easycom_q_pickerview2 + _easycom_q_dialog2)();
}
const _easycom_q_btn = () => "../q-btn/q-btn.js";
const _easycom_q_pickerview = () => "../q-pickerview/q-pickerview.js";
const _easycom_q_dialog = () => "../q-dialog/q-dialog.js";
if (!Math) {
  (_easycom_q_btn + _easycom_q_pickerview + _easycom_q_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(_ctx.close),
    b: common_vendor.p({
      outline: true,
      color: "blue-grey",
      label: "\u53D6\u6D88"
    }),
    c: _ctx.title
  }, _ctx.title ? {
    d: common_vendor.t(_ctx.title)
  } : {}, {
    e: common_vendor.o(_ctx.confirm),
    f: common_vendor.p({
      color: "primary",
      label: "\u786E\u5B9A"
    }),
    g: common_vendor.sr("pickView", "9590df5c-3,9590df5c-0"),
    h: common_vendor.o(_ctx.onChange),
    i: common_vendor.o(($event) => _ctx.innerValue = $event),
    j: common_vendor.p({
      align: "center",
      options: _ctx.options,
      perfix: _ctx.perfix,
      suffix: _ctx.suffix,
      align: _ctx.align,
      itemLabel: _ctx.itemLabel,
      itemValue: _ctx.itemValue,
      itemHeight: _ctx.itemHeight,
      rowNumber: _ctx.rowNumber,
      modelValue: _ctx.innerValue
    }),
    k: common_vendor.sr("rootRef", "9590df5c-0"),
    l: common_vendor.p({
      modelValue: _ctx.show,
      position: _ctx.position,
      persistent: true
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-picker/q-picker.vue"]]);
wx.createComponent(Component);
