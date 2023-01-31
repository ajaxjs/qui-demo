"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useDark = require("../../composables/private/use-dark.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const insetMap = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
};
const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QSeparator",
  props: {
    ...uni_modules_kvQui_composables_private_useDark.useDarkProps,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(props) {
    const vm = common_vendor.getCurrentInstance();
    const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, vm.proxy.$q);
    const orientation = common_vendor.computed$1(() => props.vertical === true ? "vertical" : "horizontal");
    const orientClass = common_vendor.computed$1(() => ` q-separator--${orientation.value}`);
    const insetClass = common_vendor.computed$1(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
    const classes = common_vendor.computed$1(
      () => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
    );
    const style = common_vendor.computed$1(() => {
      const acc = {};
      if (props.size !== void 0) {
        acc[props.vertical === true ? "width" : "height"] = props.size;
      }
      if (props.spaced !== false) {
        const size = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
        const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size;
      }
      return acc;
    });
    return {
      classes,
      style,
      orientation
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(_ctx.classes),
    b: common_vendor.s(_ctx.style),
    c: _ctx.orientation
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-separator/q-separator.vue"]]);
wx.createComponent(Component);
