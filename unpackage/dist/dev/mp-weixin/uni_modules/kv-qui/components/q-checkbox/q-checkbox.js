"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useOptions = require("../../composables/private/use-options.js");
require("../../utils/is.js");
require("../../composables/private/use-attr.js");
const _sfc_main = {
  name: "QCheckbox",
  props: uni_modules_kvQui_composables_private_useOptions.useOptionProps,
  emits: ["change", "update:modelValue"],
  setup(props, { emit }) {
    const useOpts = uni_modules_kvQui_composables_private_useOptions.useOption(props);
    function onChange(evt) {
      const { isGroup, trueValue } = useOpts;
      const val = isGroup.value ? evt.detail.value : evt.detail.value[0] ? trueValue : evt.detail.value[0];
      emit("update:modelValue", val);
      evt.detail.value = val;
      emit("change", evt);
    }
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
        b: "789f7272-0-" + i0,
        c: common_vendor.p({
          name: _ctx.icons[i],
          size: "22px"
        })
      } : {}, {
        d: !_ctx.icons[i],
        e: vo.value + "",
        f: vo.value,
        g: _ctx.status[i],
        h: vo.disable,
        i: vo.color,
        j: common_vendor.t(vo.label),
        k: common_vendor.n({
          "q-checked": _ctx.status[i]
        }),
        l: i
      });
    }),
    b: common_vendor.n(_ctx.labelClass),
    c: common_vendor.s(_ctx.labelStyle),
    d: common_vendor.n(_ctx.classes),
    e: common_vendor.o((...args) => $setup.onChange && $setup.onChange(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-checkbox/q-checkbox.vue"]]);
wx.createComponent(Component);
