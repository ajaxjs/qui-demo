"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useOptions = require("../../composables/private/use-options.js");
require("../../utils/is.js");
require("../../composables/private/use-attr.js");
const _sfc_main = {
  name: "QRadio",
  props: uni_modules_kvQui_composables_private_useOptions.useOptionProps,
  emits: ["change", "update:modelValue"],
  setup(props, { slots, emit }) {
    function onChange(evt) {
      emit("update:modelValue", evt.detail.value);
      emit("change", evt);
    }
    const useOpts = uni_modules_kvQui_composables_private_useOptions.useOption(props);
    return {
      ...useOpts,
      onChange
    };
  }
};
if (!Array) {
  const _easycom_q_icon2 = common_vendor.resolveComponent("q-icon");
  _easycom_q_icon2();
}
const _easycom_q_icon = () => "../q-icon/q-icon.js";
if (!Math) {
  _easycom_q_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.opts, (vo, i, i0) => {
      return common_vendor.e({
        a: _ctx.icons[i]
      }, _ctx.icons[i] ? {
        b: "c131485c-0-" + i0,
        c: common_vendor.p({
          name: _ctx.icons[i],
          size: "22px"
        })
      } : {}, {
        d: !_ctx.icons[i],
        e: vo.value,
        f: _ctx.status[i],
        g: vo.color,
        h: common_vendor.t(vo.label),
        i: common_vendor.n({
          "q-checked": _ctx.status[i]
        }),
        j: i
      });
    }),
    b: common_vendor.n(_ctx.labelClass),
    c: common_vendor.s(_ctx.labelStyle),
    d: common_vendor.n("q-gutter-" + _ctx.gutter),
    e: common_vendor.o((...args) => $setup.onChange && $setup.onChange(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-radio/q-radio.vue"]]);
wx.createComponent(Component);
