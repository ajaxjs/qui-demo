"use strict";
const uni_modules_kvQui_components_qSpinner_useSpinner = require("./use-spinner.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../composables/private/use-size.js");
const _sfc_main = {
  name: "QSpinner",
  props: {
    ...uni_modules_kvQui_components_qSpinner_useSpinner.useSpinnerProps,
    thickness: {
      type: Number,
      default: 3
    }
  },
  setup(props) {
    const { cSize, classes } = uni_modules_kvQui_components_qSpinner_useSpinner.useSpinner(props);
    return {
      cSize,
      classes
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.thickness,
    b: common_vendor.n($setup.classes),
    c: $setup.cSize,
    d: $setup.cSize
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-spinner/q-spinner.vue"]]);
wx.createComponent(Component);
