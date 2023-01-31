"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const uni_modules_kvQui_composables_private_useDark = require("../../composables/private/use-dark.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QBanner",
  props: {
    ...uni_modules_kvQui_composables_private_useDark.useDarkProps,
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = common_vendor.getCurrentInstance();
    const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, $q);
    slots.action;
    const classes = common_vendor.computed$1(
      () => "q-banner row items-center" + (props.dense === true ? " q-banner--dense" : "") + (isDark.value === true ? " q-banner--dark q-dark" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const actionClass = common_vendor.computed$1(
      () => `q-banner__actions row items-center justify-end col-${props.inlineActions === true ? "auto" : "all"}`
    );
    return {
      classes,
      actionClass
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.$slots.avatar
  }, _ctx.$slots.avatar ? {} : {}, {
    b: _ctx.$slots.action
  }, _ctx.$slots.action ? {
    c: common_vendor.n(_ctx.actionClass.value)
  } : {}, {
    d: common_vendor.n(_ctx.classes),
    e: common_vendor.n(_ctx.className)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-banner/q-banner.vue"]]);
wx.createComponent(Component);
