"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useDark = require("../../composables/private/use-dark.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const uni_modules_kvQui_composables_private_useModelToggle = require("../../composables/private/use-model-toggle.js");
const uni_modules_kvQui_utils_is = require("../../utils/is.js");
const uni_modules_kvQui_utils_private_symbols = require("../../utils/private/symbols.js");
const _sfc_main = {
  props: {
    ...uni_modules_kvQui_composables_private_useDark.useDarkProps,
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    ...uni_modules_kvQui_composables_private_useModelToggle.useModelToggleProps,
    side: {
      type: String,
      default: "left",
      validator: (v) => ["left", "right"].includes(v)
    },
    width: {
      type: Number,
      default: 300
    },
    bordered: Boolean,
    elevated: Boolean,
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },
  emits: [...uni_modules_kvQui_composables_private_useModelToggle.useModelToggleEmits],
  setup(props, { slots, emit, attrs }) {
    const $q = common_vendor.inject(uni_modules_kvQui_utils_private_symbols.quasarKey);
    const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, $q);
    const showing = common_vendor.ref(props.modelValue === true);
    common_vendor.computed$1(() => props.overlay === true);
    const classes = common_vendor.computed$1(
      () => `q-drawer q-drawer--${props.side}` + (props.modelValue === true ? " q-drawer__show" : "") + (props.bordered === true ? " q-drawer--bordered" : "") + (isDark.value === true ? " q-drawer--dark q-dark" : "")
    );
    const backgropClass = common_vendor.computed$1(() => ({
      "q-drawer__backdrop__show": props.modelValue
    }));
    const style = common_vendor.reactive({
      width: `${props.width + (uni_modules_kvQui_utils_is.isNumber(props.width) ? "px" : "")}`
    });
    const { show, hide } = uni_modules_kvQui_composables_private_useModelToggle.useModelToggle({ showing });
    function onClickBackGroup(evt) {
      if (props.persistent !== true)
        hide(evt);
    }
    return {
      showing,
      classes,
      style,
      show,
      hide,
      backgropClass,
      onClickBackGroup
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.elevated
  }, $props.elevated ? {} : {}, {
    b: common_vendor.n($setup.classes),
    c: common_vendor.n(_ctx.className),
    d: common_vendor.s(_ctx.styles),
    e: common_vendor.s($setup.style),
    f: $props.overlay !== true
  }, $props.overlay !== true ? {
    g: $setup.showing,
    h: common_vendor.n($setup.backgropClass),
    i: common_vendor.o((...args) => $setup.onClickBackGroup && $setup.onClickBackGroup(...args)),
    j: common_vendor.o(() => {
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-drawer/q-drawer.vue"]]);
wx.createComponent(Component);
