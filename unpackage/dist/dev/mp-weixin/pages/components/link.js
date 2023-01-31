"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_q_link2 = common_vendor.resolveComponent("q-link");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  (_easycom_q_link2 + _component_Lanmu)();
}
const _easycom_q_link = () => "../../uni_modules/kv-qui/components/q-link/q-link.js";
if (!Math) {
  _easycom_q_link();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      to: "/pages/components/card",
      label: "\u5185\u90E8\u8FDE\u63A5"
    }),
    b: common_vendor.p({
      href: "https://cn.vuejs.org/",
      label: "\u5916\u90E8\u8FDE\u63A5"
    }),
    c: common_vendor.p({
      mp: "wxa91ff29be8dbb11c://pages/components/btn?id=12",
      label: "Wechat Mini Program"
    }),
    d: common_vendor.p({
      title: "QLink \u8FDE\u63A5\u7EC4\u4EF6"
    }),
    e: common_vendor.o((...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
    f: common_vendor.o((...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
    g: common_vendor.o((...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
    h: common_vendor.p({
      title: "JS\u65B9\u6CD5\u8DF3\u8F6C"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/link.vue"]]);
wx.createPage(MiniProgramPage);
