"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const uni_modules_kvQui_utils_private_symbols = require("../../utils/private/symbols.js");
const _sfc_main = {
  props: {
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    modelValue: {
      type: Boolean,
      default: true
    },
    bordered: Boolean,
    elevated: Boolean
  },
  setup(props) {
    const $q = common_vendor.inject(uni_modules_kvQui_utils_private_symbols.quasarKey);
    const isCustom = $q.utils.getRoute("navigationStyle") == "custom";
    const style = common_vendor.computed$1(() => {
      $q.config;
      const { statusBarHeight } = $q.platform;
      const styl = `height:${$q.config.headHeight}px;` + (isCustom ? `padding-top:${statusBarHeight}px;` : "");
      return props.styles ? [styl, props.styles] : styl;
    });
    const classes = common_vendor.computed$1(
      () => "q-header fixed-top q-layout__section--marginal row no-wrap items-center justify-center" + (props.bordered === true ? " q-header--bordered" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" : "")
    );
    return {
      classes,
      style
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.elevated
  }, $props.elevated ? {} : {}, {
    b: common_vendor.n($setup.classes),
    c: common_vendor.n(_ctx.className),
    d: common_vendor.s($setup.style)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-header/q-header.vue"]]);
wx.createComponent(Component);
