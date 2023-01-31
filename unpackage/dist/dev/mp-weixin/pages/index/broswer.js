"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      url: "",
      webviewStyles: {
        progress: {
          color: "#F33"
        }
      }
    };
  },
  onLoad({ url }) {
    this.url = url;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.webviewStyles,
    b: $data.url,
    c: common_vendor.o((...args) => _ctx.onLoaded && _ctx.onLoaded(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/index/broswer.vue"]]);
wx.createPage(MiniProgramPage);
