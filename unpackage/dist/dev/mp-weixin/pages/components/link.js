"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_q_link2 = common_vendor.resolveComponent("q-link");
  const _component_HiCode = common_vendor.resolveComponent("HiCode");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_link2 + _component_HiCode + _component_Lanmu + _easycom_q_page2)();
}
const _easycom_q_link = () => "../../uni_modules/kv-qui/components/q-link/q-link.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_link + _easycom_q_page)();
}
const _sfc_main = {
  __name: "link",
  setup(__props) {
    const Qlink = `<q-link to="/pages/components/card" label="\u5185\u90E8\u8FDE\u63A5" /> -
<q-link href="https://cn.vuejs.org/" label="\u5916\u90E8\u8FDE\u63A5" /> -
<q-link mp="wxa91ff29be8dbb11c://pages/components/btn?id=12" label="Wechat Mini Program" />`;
    const code2 = `<view @click="$uni.openUrl({to:'/pages/components/btn?id=12'})">
	JS\u8DF3\u8F6C\u8FDE\u63A51
</view>
<view @click="$uni.openUrl" data-to="/pages/components/btn?id=12">
	JS\u8DF3\u8F6C\u8FDE\u63A5
</view>
<view @click="$uni.openUrl" data-root="/pages/index/broswer" data-url="https://vip.qixingtang.com/show-513.html">
	URL\u8DF3\u8F6C\u8FDE\u63A5
</view>
<view @click="$uni.openUrl" data-mp="wxa91ff29be8dbb11c://pages/components/btn?id=12#test">
	\u5C0F\u7A0B\u5E8F\u8DF3\u8F6C
</view>`;
    return (_ctx, _cache) => {
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
          hide: true,
          title: "\u793A\u4F8B\u4EE3\u7801",
          code: Qlink
        }),
        e: common_vendor.p({
          title: "QLink \u8FDE\u63A5\u7EC4\u4EF6"
        }),
        f: common_vendor.o(($event) => _ctx.$uni.openUrl({
          to: "/pages/components/btn?id=12"
        })),
        g: common_vendor.o((...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
        h: common_vendor.o((...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
        i: common_vendor.o((...args) => _ctx.$uni.openUrl && _ctx.$uni.openUrl(...args)),
        j: common_vendor.p({
          hide: true,
          title: "\u793A\u4F8B\u4EE3\u7801",
          code: code2
        }),
        k: common_vendor.p({
          title: "JS\u65B9\u6CD5\u8DF3\u8F6C"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AppProject/qui-demo/pages/components/link.vue"]]);
wx.createPage(MiniProgramPage);
