"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    return {
      imgIcon: [
        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
        "img:https://app-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/default.png",
        "img:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
        'img:data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" fill="${face}"><path fill="none" d="M0 0h24v24H0V0z"/><path stroke="${hair}" fill="${hair}" stroke-linecap="round" opacity=".5" d="M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM8.08 5.03C6.37 6 5.05 7.58 4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44z"/><path stroke="none" fill="${face}" stroke-linecap="round"  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"/><circle cx="9" cy="13" r="1.25"/><circle cx="15" cy="13" r="1.25"/></svg>'
      ]
    };
  }
};
if (!Array) {
  const _easycom_q_icon2 = common_vendor.resolveComponent("q-icon");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  const _easycom_q_page2 = common_vendor.resolveComponent("q-page");
  (_easycom_q_icon2 + _component_Lanmu + _easycom_q_page2)();
}
const _easycom_q_icon = () => "../../uni_modules/kv-qui/components/q-icon/q-icon.js";
const _easycom_q_page = () => "../../uni_modules/kv-qui/components/q-page/q-page.js";
if (!Math) {
  (_easycom_q_icon + _easycom_q_page)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "font_download"
    }),
    b: common_vendor.p({
      name: "warning"
    }),
    c: common_vendor.p({
      name: "format_size"
    }),
    d: common_vendor.p({
      name: "print"
    }),
    e: common_vendor.p({
      name: "today"
    }),
    f: common_vendor.p({
      name: "style"
    }),
    g: common_vendor.p({
      title: "Basic"
    }),
    h: common_vendor.p({
      name: "font_download",
      color: "primary",
      size: "32px"
    }),
    i: common_vendor.p({
      name: "warning",
      color: "warning",
      size: "4rem"
    }),
    j: common_vendor.p({
      name: "format_size"
    }),
    k: common_vendor.p({
      name: "print",
      color: "teal",
      size: "4.4em"
    }),
    l: common_vendor.p({
      name: "today",
      size: "2em"
    }),
    m: common_vendor.p({
      name: "style",
      size: "3em"
    }),
    n: common_vendor.p({
      title: "Size & colors"
    }),
    o: common_vendor.f(["xs", "sm", "md", "lg", "xl"], (size, k0, i0) => {
      return {
        a: size,
        b: "b20fa5e4-16-" + i0 + ",b20fa5e4-15",
        c: common_vendor.p({
          size,
          name: "font_download"
        })
      };
    }),
    p: common_vendor.p({
      title: "Standard sizes"
    }),
    q: common_vendor.f($setup.imgIcon, (src, i, i0) => {
      return {
        a: common_vendor.t(src),
        b: "b20fa5e4-18-" + i0 + ",b20fa5e4-17",
        c: common_vendor.p({
          size: "md",
          name: src
        }),
        d: i
      };
    }),
    r: common_vendor.p({
      title: "Image icons"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/icon.vue"]]);
wx.createPage(MiniProgramPage);
