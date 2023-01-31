"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useAlign = require("../../composables/private/use-align.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QCardActions",
  props: {
    ...uni_modules_kvQui_composables_private_useAlign.useAlignProps,
    vertical: Boolean
  },
  setup(props, { slots }) {
    const alignClass = uni_modules_kvQui_composables_private_useAlign.useAlign(props);
    const classes = common_vendor.computed$1(
      () => `q-card__actions ${alignClass.value} q-card__actions--${props.vertical === true ? "vert column" : "horiz row"}`
    );
    return {
      classes
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(_ctx.classes)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-card-actions/q-card-actions.vue"]]);
wx.createComponent(Component);
