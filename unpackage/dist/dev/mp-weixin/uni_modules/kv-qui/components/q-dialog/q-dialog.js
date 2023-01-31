"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useModelToggle = require("../../composables/private/use-model-toggle.js");
const uni_modules_kvQui_composables_private_useTransition = require("../../composables/private/use-transition.js");
const uni_modules_kvQui_composables_private_useTimeout = require("../../composables/private/use-timeout.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
require("../../utils/private/vm.js");
const positionClass = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
};
const defaultTransitions = {
  standard: ["zoom-in", "zoom-out"],
  top: ["slide-in-down", "slide-out-down"],
  bottom: ["slide-in-up", "slide-out-up"],
  right: ["slide-in-right", "slide-out-right"],
  left: ["slide-in-left", "slide-out-left"]
};
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QDialog",
  inheritAttrs: false,
  props: {
    ...uni_modules_kvQui_composables_private_useModelToggle.useModelToggleProps,
    ...uni_modules_kvQui_composables_private_useTransition.useTransitionProps,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (val) => val === "standard" || ["top", "bottom", "left", "right"].includes(val)
    }
  },
  emits: [
    ...uni_modules_kvQui_composables_private_useModelToggle.useModelToggleEmits,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = common_vendor.getCurrentInstance();
    common_vendor.ref(null);
    const showing = common_vendor.ref(props.modelValue);
    const animating = common_vendor.ref(false);
    const shaking = common_vendor.ref(false);
    common_vendor.computed$1(
      () => props.persistent !== true && props.noRouteDismiss !== true && props.seamless !== true
    );
    const duration = props.transitionDuration;
    const { show, hide } = uni_modules_kvQui_composables_private_useModelToggle.useModelToggle({ showing, handleShow, handleHide, duration });
    const { registerTimeout } = uni_modules_kvQui_composables_private_useTimeout.useTimeout();
    const { transitionProps, transitionStyle } = uni_modules_kvQui_composables_private_useTransition.useTransition(
      props,
      () => defaultTransitions[props.position][0],
      () => defaultTransitions[props.position][1]
    );
    const classes = common_vendor.computed$1(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props.square === true ? " q-dialog__inner--square" : "") + (shaking.value ? " q-animate--deny" : "")
    );
    const animate = common_vendor.computed$1(() => animating.value === true ? props.modelValue ? transitionProps.value.show : transitionProps.value.hide : "");
    const useBackdrop = common_vendor.computed$1(() => showing.value === true && props.seamless !== true);
    const rootClasses = common_vendor.computed$1(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
      attrs.class
    ]);
    function shake(evt) {
      shaking.value = true;
      emit("shake", evt);
      registerTimeout(() => {
        shaking.value = false;
      }, 150);
      console.log("shake");
    }
    function handleShow(evt) {
      animating.value = true;
      registerTimeout(() => {
        animating.value = false;
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      animating.value = true;
      registerTimeout(() => {
        animating.value = false;
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function onBackdropClick(e) {
      if (props.persistent !== true && props.noBackdropDismiss !== true) {
        hide(e);
      } else if (props.noShake !== true) {
        shake(e);
      }
    }
    function onOutClick(e) {
      if (props.autoClose === true) {
        hide(e);
        emit("click", e);
      }
    }
    Object.assign(vm.proxy, { hide, show });
    return {
      animate,
      animating,
      showing,
      classes,
      useBackdrop,
      rootClasses,
      transitionProps,
      transitionStyle,
      onOutClick,
      onBackdropClick
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.showing
  }, _ctx.showing ? common_vendor.e({
    b: _ctx.useBackdrop
  }, _ctx.useBackdrop ? {
    c: _ctx.modelValue ? 1 : 0,
    d: _ctx.transitionDuration * 0.6 + "ms",
    e: common_vendor.o((...args) => _ctx.onBackdropClick && _ctx.onBackdropClick(...args)),
    f: common_vendor.o((...args) => _ctx.onBackdropClick && _ctx.onBackdropClick(...args))
  } : {}, {
    g: common_vendor.n(_ctx.classes),
    h: common_vendor.n(_ctx.animate),
    i: -1,
    j: common_vendor.s(_ctx.transitionStyle),
    k: common_vendor.n(_ctx.rootClasses),
    l: _ctx.useBackdrop === true ? "true" : "false",
    m: common_vendor.o((...args) => _ctx.onOutClick && _ctx.onOutClick(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-dialog/q-dialog.vue"]]);
wx.createComponent(Component);
