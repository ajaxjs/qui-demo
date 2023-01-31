"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_private_symbols = require("../../utils/private/symbols.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const _sfc_main = {
  props: {
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    bordered: Boolean,
    elevated: Boolean
  },
  setup(props) {
    const $q = common_vendor.inject(uni_modules_kvQui_utils_private_symbols.quasarKey);
    const footStyle = common_vendor.computed$1(() => {
      const sfis = $q.platform.safeAreaInsets;
      const styl = `height: ${$q.config.footHeight}px; padding-bottom: ${sfis.bottom}px;`;
      return props.styles ? [styl, props.styles] : styl;
    });
    console.log("footer", footStyle.value);
    const classes = common_vendor.computed$1(() => [{
      "q-footer--bordered": props.bordered
    }, props.className]);
    return {
      classes,
      footStyle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.elevated
  }, $props.elevated ? {} : {}, {
    b: common_vendor.n($setup.classes),
    c: common_vendor.s($setup.footStyle)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-footer/q-footer.vue"]]);
wx.createComponent(Component);
