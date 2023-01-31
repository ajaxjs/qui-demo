"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      imgid: 0,
      width: 0,
      height: 0
    };
  },
  mounted() {
    this.setImgSize();
  },
  methods: {
    changeId() {
      this.imgid = Math.ceil(Math.random() * 1e3);
    },
    random(minNum, maxNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    },
    setImgSize() {
      this.width = this.random(100, 200);
      this.height = this.random(50, 200);
    }
  }
};
if (!Array) {
  const _easycom_q_img2 = common_vendor.resolveComponent("q-img");
  const _component_Lanmu = common_vendor.resolveComponent("Lanmu");
  (_easycom_q_img2 + _component_Lanmu)();
}
const _easycom_q_img = () => "../../uni_modules/kv-qui/components/q-img/q-img.js";
if (!Math) {
  _easycom_q_img();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: "https://placeimg.com/500/300/nature",
      ratio: 16 / 9
    }),
    b: common_vendor.p({
      src: "https://placeimg.com/500/300/nature",
      ratio: 1
    }),
    c: common_vendor.p({
      src: "https://placeimg.com/500/300/nature",
      ratio: 4 / 3
    }),
    d: common_vendor.p({
      title: "Custom aspect ratio"
    }),
    e: common_vendor.p({
      src: "https://cdn.quasar.dev/img/parallax2.jpg"
    }),
    f: common_vendor.p({
      src: "https://cdn.quasar.dev/img/parallax2.jpg"
    }),
    g: common_vendor.p({
      src: "https://cdn.quasar.dev/img/parallax2.jpg"
    }),
    h: common_vendor.p({
      src: "https://cdn.quasar.dev/img/parallax2.jpg"
    }),
    i: common_vendor.p({
      title: "Caption"
    }),
    j: common_vendor.p({
      src: `https://suan-1251134852.cos.ap-guangzhou.myqcloud.com/avatar/random1/${$data.imgid}.png`,
      error: "https://suan.qxtky.com/static/user/default.jpg"
    }),
    k: common_vendor.o((...args) => $options.changeId && $options.changeId(...args)),
    l: common_vendor.t($data.width),
    m: common_vendor.t($data.height),
    n: common_vendor.p({
      src: `https://placeimg.com/${$data.width}/${$data.height}/nature`,
      id: "orignal"
    }),
    o: common_vendor.p({
      src: `https://placeimg.com/${$data.width}/${$data.height}/nature`,
      width: " 200 ",
      height: "80",
      id: "orignal"
    }),
    p: common_vendor.o((...args) => $options.setImgSize && $options.setImgSize(...args)),
    q: common_vendor.p({
      title: "\u56FE\u7247"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/pages/components/img.vue"]]);
wx.createPage(MiniProgramPage);
