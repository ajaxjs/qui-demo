"use strict";
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "QCardSection",
  props: {
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    horizontal: Boolean
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(`q-card__section--${$props.horizontal === true ? "horiz row no-wrap" : "vert"}`),
    b: common_vendor.n(_ctx.className),
    c: common_vendor.s(_ctx.styles)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-card-section/q-card-section.vue"]]);
wx.createComponent(Component);
