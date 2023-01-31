"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "QRipple",
  data() {
    return {
      page: null,
      rips: {}
    };
  },
  methods: {
    buildStyle(evt) {
      const { offsetTop, offsetLeft } = evt.target;
      const { pageX, pageY } = evt.touches[0];
      return {
        left: pageX - offsetLeft + "px",
        top: pageY - offsetTop + "px"
      };
    },
    ripple(evt) {
      const ti = Math.ceil(evt.timeStamp);
      this.rips[ti] = this.buildStyle(evt);
      setTimeout(() => {
        this.rips[ti] = Object.assign({}, this.rips[ti], { left: "-50%", top: "-50%", width: "200%", height: "200%" });
        setTimeout(() => {
          this.rips[ti] = Object.assign({}, this.rips[ti], { opacity: 0 });
        }, 300);
        setTimeout(() => {
          delete this.rips[ti];
        }, 600);
      }, 15);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.rips, (vo, i, i0) => {
      return {
        a: i,
        b: common_vendor.s(vo)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-ripple/q-ripple.vue"]]);
wx.createComponent(Component);
