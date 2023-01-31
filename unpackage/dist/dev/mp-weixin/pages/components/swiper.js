"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_q_swiper2 = common_vendor.resolveComponent("q-swiper");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_swiper2 + _easycom_q_page2)();
}
const _easycom_q_swiper = () => "../../uni_modules/kv-qui/components/q-swiper/q-swiper.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_swiper + _easycom_q_page)();
}
const _sfc_main = {
  __name: "swiper",
  setup(__props) {
    const tab = common_vendor.ref("mails");
    const tab1 = common_vendor.ref(0);
    const options = [
      { src: "https://cdn.quasar.dev/img/mountains.jpg", to: "/pages/index/index", target: "tab" },
      { src: "https://cdn.quasar.dev/img/parallax1.jpg" },
      { src: "https://cdn.quasar.dev/img/parallax2.jpg" }
    ];
    const onClick = (evt) => {
      console.log(evt);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => tab.value = $event),
        b: common_vendor.p({
          indicatorDots: true,
          modelValue: tab.value
        }),
        c: common_vendor.t(tab.value),
        d: common_vendor.o(onClick),
        e: common_vendor.o(($event) => tab1.value = $event),
        f: common_vendor.p({
          options,
          indicatorDots: true,
          modelValue: tab1.value
        }),
        g: common_vendor.t(tab1.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AppProject/qui-demo/pages/components/swiper.vue"]]);
wx.createPage(MiniProgramPage);
