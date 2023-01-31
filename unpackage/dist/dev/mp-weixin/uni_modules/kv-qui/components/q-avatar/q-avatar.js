"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useSize = require("../../composables/private/use-size.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QAvatar",
  props: {
    ...uni_modules_kvQui_composables_private_useSize.useSizeProps,
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean
  },
  setup(props) {
    const sizeStyle = uni_modules_kvQui_composables_private_useSize.useSize(props);
    const classes = common_vendor.computed$1(
      () => "q-avatar" + (props.color ? ` bg-${props.color}` : "") + (props.textColor ? ` text-${props.textColor} q-chip--colored` : "") + (props.square === true ? " q-avatar--square" : props.rounded === true ? " rounded-borders" : "")
    );
    const contentStyle = common_vendor.computed$1(() => props.fontSize ? { fontSize: props.fontSize } : null);
    return {
      classes,
      sizeStyle,
      contentStyle
    };
  }
});
if (!Array) {
  const _easycom_q_icon2 = common_vendor.resolveComponent("q-icon");
  _easycom_q_icon2();
}
const _easycom_q_icon = () => "../q-icon/q-icon.js";
if (!Math) {
  _easycom_q_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? {
    b: common_vendor.p({
      name: _ctx.icon
    })
  } : {}, {
    c: common_vendor.s(_ctx.contentStyle),
    d: common_vendor.n(_ctx.classes),
    e: common_vendor.s(_ctx.sizeStyle)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-avatar/q-avatar.vue"]]);
wx.createComponent(Component);
