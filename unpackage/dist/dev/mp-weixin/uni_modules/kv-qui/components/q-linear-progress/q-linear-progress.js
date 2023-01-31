"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useDark = require("../../composables/private/use-dark.js");
const uni_modules_kvQui_composables_private_useSize = require("../../composables/private/use-size.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const defaultSizes = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function width(val, reverse, $q) {
  return {
    transform: reverse === true ? `translateX(100%) scale3d(${-val},1,1)` : `scale3d(${val},1,1)`
  };
}
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QLinearProgress",
  props: {
    ...uni_modules_kvQui_composables_private_useDark.useDarkProps,
    ...uni_modules_kvQui_composables_private_useSize.useSizeProps,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(props, { slots }) {
    const { proxy } = common_vendor.getCurrentInstance();
    const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, proxy.$q);
    const sizeStyle = uni_modules_kvQui_composables_private_useSize.useSize(props, defaultSizes);
    const motion = common_vendor.computed$1(() => props.indeterminate === true || props.query === true);
    const widthReverse = common_vendor.computed$1(() => props.reverse !== props.query);
    const style = common_vendor.computed$1(() => ({
      ...sizeStyle.value !== null ? sizeStyle.value : {},
      "--q-linear-progress-speed": `${props.animationSpeed}ms`
    }));
    const classes = common_vendor.computed$1(
      () => "q-linear-progress" + (props.color !== void 0 ? ` text-${props.color}` : "") + (props.reverse === true || props.query === true ? " q-linear-progress--reverse" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const trackStyle = common_vendor.computed$1(() => width(
      props.buffer !== void 0 ? props.buffer : 1,
      widthReverse.value,
      proxy.$q
    ));
    const trackClass = common_vendor.computed$1(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--with${props.instantFeedback === true ? "out" : ""}-transition q-linear-progress__track--${isDark.value === true ? "dark" : "light"}` + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
    );
    const modelStyle = common_vendor.computed$1(() => width(
      motion.value === true ? 1 : props.value,
      widthReverse.value,
      proxy.$q
    ));
    const modelClass = common_vendor.computed$1(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--with${props.instantFeedback === true ? "out" : ""}-transition q-linear-progress__model--${motion.value === true ? "in" : ""}determinate`
    );
    const stripeStyle = common_vendor.computed$1(() => ({
      width: `${props.value * 100}%`
    }));
    const stripeClass = common_vendor.computed$1(
      () => `q-linear-progress__stripe absolute-${props.reverse === true ? "right" : "left"}`
    );
    return {
      classes,
      style,
      valuenow: props.indeterminate === true ? void 0 : props.value,
      trackClass,
      trackStyle,
      modelClass,
      modelStyle,
      motion,
      stripeClass,
      stripeStyle
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.n(_ctx.trackClass),
    b: common_vendor.s(_ctx.trackStyle),
    c: common_vendor.n(_ctx.modelClass),
    d: common_vendor.s(_ctx.modelStyle),
    e: _ctx.stripe && _ctx.motion === false
  }, _ctx.stripe && _ctx.motion === false ? {
    f: common_vendor.n(_ctx.stripeClass),
    g: common_vendor.s(_ctx.stripeStyle)
  } : {}, {
    h: common_vendor.n(_ctx.classes),
    i: common_vendor.s(_ctx.style),
    j: _ctx.valuenow
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-linear-progress/q-linear-progress.vue"]]);
wx.createComponent(Component);
