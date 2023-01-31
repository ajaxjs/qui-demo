"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useDark = require("../../composables/private/use-dark.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const _sfc_main = {
  name: "QCard",
  props: {
    ...uni_modules_kvQui_composables_private_useDark.useDarkProps,
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    tag: {
      type: String,
      default: "view"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  setup(props, {
    slots
  }) {
    const { proxy: { $q } } = common_vendor.getCurrentInstance();
    const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, $q);
    const classes = common_vendor.computed$1(() => {
      let cls = "q-card" + (isDark.value === true ? " q-card--dark q-dark" : "") + (props.bordered === true ? " q-card--bordered" : "") + (props.square === true ? " q-card--square no-border-radius" : "") + (props.flat === true ? " q-card--flat no-shadow" : "");
      return [cls, props.className];
    });
    const styles = common_vendor.computed$1(() => {
      return props.styles;
    });
    return {
      classes,
      styles
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($setup.classes),
    b: common_vendor.s($setup.styles)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-card/q-card.vue"]]);
wx.createComponent(Component);
