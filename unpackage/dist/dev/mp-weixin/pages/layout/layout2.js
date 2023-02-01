"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_q_footer2 = common_vendor.resolveComponent("q-footer");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_footer2 + _easycom_q_page2)();
}
const _easycom_q_footer = () => "../../uni_modules/kv-qui/components/q-footer/q-footer.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_footer + _easycom_q_page)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(50, (i, k0, i0) => {
      return {
        a: common_vendor.t(i),
        b: i
      };
    }),
    b: common_vendor.p({
      bordered: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/layout/layout2.vue"]]);
wx.createPage(MiniProgramPage);
