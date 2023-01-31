"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useLink = require("../../composables/private/use-link.js");
const uni_modules_kvQui_utils_uniapp_openUrl = require("../../utils/uniapp/open-url.js");
require("../../utils/uniapp/page.js");
const _sfc_main = {
  name: "QLink",
  props: {
    ...uni_modules_kvQui_composables_private_useLink.useLinkProps
  },
  setup(props) {
    const linkPrms = uni_modules_kvQui_composables_private_useLink.useLink(props);
    return {
      ...linkPrms,
      getOpenType: uni_modules_kvQui_utils_uniapp_openUrl.getOpenType
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.to
  }, _ctx.to ? {
    b: common_vendor.t(_ctx.label),
    c: _ctx.to,
    d: $setup.getOpenType(this.target)
  } : _ctx.mp ? {
    f: common_vendor.t(_ctx.label),
    g: common_vendor.o(($event) => _ctx.$uni.openUrl({
      mp: _ctx.mp
    }))
  } : _ctx.href ? {
    i: common_vendor.t(_ctx.label),
    j: common_vendor.o(($event) => _ctx.$uni.openUrl({
      href: _ctx.href
    }))
  } : {}, {
    e: _ctx.mp,
    h: _ctx.href
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-link/q-link.vue"]]);
wx.createComponent(Component);
