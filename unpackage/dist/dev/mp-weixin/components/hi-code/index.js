"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    title: String,
    code: [String],
    hide: Boolean
  },
  setup(props) {
    const cid = common_vendor.ref(0);
    const isShow = common_vendor.ref(!props.hide);
    const codeArr = common_vendor.ref(props.code);
    if (!Array.isArray(props.code)) {
      codeArr.value = [{ title: props.title, code: props.code }];
    }
    function toTab(i) {
      cid.value = i;
      isShow.value = true;
    }
    return {
      cid,
      codeArr,
      isShow,
      toTab
    };
  }
};
if (!Array) {
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  _easycom_q_btn2();
}
const _easycom_q_btn = () => "../../uni_modules/kv-qui/components/q-btn/q-btn.js";
if (!Math) {
  _easycom_q_btn();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.codeArr.length
  }, $setup.codeArr.length ? {
    b: common_vendor.f($setup.codeArr, (vo, i, i0) => {
      return {
        a: common_vendor.t(vo.title || i),
        b: common_vendor.n(i == $setup.cid ? "text-blue" : ""),
        c: i,
        d: common_vendor.o(($event) => $setup.toTab(i), i)
      };
    }),
    c: common_vendor.o(($event) => $setup.isShow = !$setup.isShow),
    d: common_vendor.p({
      dense: true,
      size: "sm",
      flat: true,
      label: $setup.isShow ? "\u9690\u85CF" : "\u663E\u793A"
    })
  } : {}, {
    e: common_vendor.f($setup.codeArr, (vo, i, i0) => {
      return common_vendor.e({
        a: i == $setup.cid
      }, i == $setup.cid ? {
        b: common_vendor.t(vo.code),
        c: $setup.isShow
      } : {}, {
        d: i
      });
    }),
    f: common_vendor.n($setup.isShow ? "show" : "hide")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e05f557a"], ["__file", "E:/AppProject/qui-demo/components/hi-code/index.vue"]]);
wx.createComponent(Component);
