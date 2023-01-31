"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const uni_modules_kvQui_utils_private_symbols = require("../../utils/private/symbols.js");
const _sfc_main = {
  props: {
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    pushWidth: {
      type: Number,
      default: 300
    },
    push: String
  },
  setup(props, { slots, emit }) {
    const $q = common_vendor.inject(uni_modules_kvQui_utils_private_symbols.quasarKey);
    const isCustom = $q.utils.getRoute("navigationStyle") == "custom";
    const { headHeight, footHeight } = $q.config;
    const { windowHeight, statusBarHeight, safeAreaInsets, uniPlatform } = $q.platform;
    const realHeadH = slots.header ? headHeight : 0;
    const realFootH = slots.footer ? footHeight : 0;
    const realStatH = isCustom ? statusBarHeight : 0;
    const spaceHeight = realHeadH + realFootH + realStatH + safeAreaInsets.bottom + (uniPlatform == "web" && !isCustom ? 44 : 0);
    const pageStyle = common_vendor.computed$1(() => {
      let styl = `--head-height: ${realHeadH}px; --foot-height: ${realFootH}px; --container-height: calc(100vh - ${spaceHeight}px); ` + (slots.header ? `padding-top: ${realStatH + headHeight}px;` : "") + (slots.footer ? ` padding-bottom: ${safeAreaInsets.bottom + footHeight}px;` : "") + (props.push ? ` transform: translateX(${(props.push == "left" ? "" : "-") + props.pushWidth}px);` : "");
      return styl;
    });
    const classes = common_vendor.computed$1(() => ({
      "q-page-pushed": props.push,
      "has-foot": slots.footer,
      "has-head": slots.header,
      "no-title": props.customPage
    }));
    return {
      classes,
      pageStyle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.$slots.container
  }, _ctx.$slots.container ? {} : {}, {
    b: common_vendor.n($setup.classes),
    c: common_vendor.n(_ctx.className),
    d: common_vendor.s($setup.pageStyle)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-page/q-page.vue"]]);
wx.createComponent(Component);
