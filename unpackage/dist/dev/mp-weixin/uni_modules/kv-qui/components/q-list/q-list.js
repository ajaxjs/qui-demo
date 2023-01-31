"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const uni_modules_kvQui_composables_private_useDark = require("../../composables/private/use-dark.js");
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QList",
  props: {
    ...uni_modules_kvQui_composables_private_useDark.useDarkProps,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, { slots }) {
    const vm = common_vendor.getCurrentInstance();
    const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, vm.proxy.$q);
    const classes = common_vendor.computed$1(
      () => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : "")
    );
    return {
      classes
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(_ctx.classes)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-list/q-list.vue"]]);
wx.createComponent(Component);
