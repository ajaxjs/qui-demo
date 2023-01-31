"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_event = require("../../utils/event.js");
const uni_modules_kvQui_components_qBtn_useBtn = require("./use-btn.js");
const uni_modules_kvQui_composables_private_useLink = require("../../composables/private/use-link.js");
require("../../composables/private/use-align.js");
require("../../composables/private/use-size.js");
require("../../composables/private/use-router-link.js");
require("../../utils/private/vm.js");
require("../../utils/uniapp/page.js");
const QIcon = () => "../q-icon/q-icon.js";
const QSpinner = () => "../q-spinner/q-spinner.js";
const QRipple = () => "../q-ripple/q-ripple.js";
const _sfc_main = {
  name: "QBtn",
  components: { QIcon, QSpinner, QRipple },
  props: {
    ...uni_modules_kvQui_components_qBtn_useBtn.useBtnProps,
    ...uni_modules_kvQui_composables_private_useLink.useLinkProps,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(props, { emit }) {
    const linkObj = uni_modules_kvQui_composables_private_useLink.useLink(props);
    const {
      classes,
      style,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      isActionable
    } = uni_modules_kvQui_components_qBtn_useBtn.useBtn(props);
    const hasLabel = common_vendor.computed$1(
      () => props.label !== void 0 && props.label !== null && props.label !== ""
    );
    const percentageStyle = common_vendor.computed$1(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    return {
      ...linkObj,
      classes,
      style,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      percentageStyle,
      isActionable,
      hasLabel
    };
  },
  methods: {
    onTriggerEvent(name, evt) {
      if (this.disable) {
        uni_modules_kvQui_utils_event.stopAndPrevent(evt);
      } else {
        switch (name) {
          case "click":
            this.$refs.ripple.ripple(evt);
            this.$uni.openUrl(this.linkAttrs);
            break;
        }
        this.$emit(name, evt);
      }
    }
  }
};
if (!Array) {
  const _easycom_q_icon2 = common_vendor.resolveComponent("q-icon");
  const _easycom_q_spinner2 = common_vendor.resolveComponent("q-spinner");
  const _easycom_q_ripple2 = common_vendor.resolveComponent("q-ripple");
  (_easycom_q_icon2 + _easycom_q_spinner2 + _easycom_q_ripple2)();
}
const _easycom_q_icon = () => "../q-icon/q-icon.js";
const _easycom_q_spinner = () => "../q-spinner/q-spinner.js";
const _easycom_q_ripple = () => "../q-ripple/q-ripple.js";
if (!Math) {
  (_easycom_q_icon + _easycom_q_spinner + _easycom_q_ripple)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? {
    b: common_vendor.p({
      name: _ctx.icon,
      role: "img",
      left: _ctx.stack === false && $setup.hasLabel === true
    })
  } : {}, {
    c: common_vendor.t(_ctx.label),
    d: _ctx.iconRight
  }, _ctx.iconRight ? {
    e: common_vendor.p({
      name: _ctx.iconRight,
      right: _ctx.stack === false && $setup.hasLabel === true
    })
  } : {}, {
    f: common_vendor.n($setup.innerClasses),
    g: _ctx.loading === true && $props.percentage !== void 0
  }, _ctx.loading === true && $props.percentage !== void 0 ? {
    h: common_vendor.s($setup.percentageStyle),
    i: $props.darkPercentage ? 1 : ""
  } : {}, {
    j: _ctx.loading
  }, _ctx.loading ? common_vendor.e({
    k: _ctx.$slots.loading
  }, _ctx.$slots.loading ? {} : {}) : {}, {
    l: !_ctx.disable
  }, !_ctx.disable ? {
    m: common_vendor.sr("ripple", "30b33358-3")
  } : {}, {
    n: _ctx.type,
    o: common_vendor.n($setup.classes),
    p: common_vendor.s($setup.style),
    q: $setup.attributes.tabindex,
    r: _ctx.disable,
    s: common_vendor.o(($event) => $options.onTriggerEvent("click", $event)),
    t: common_vendor.o(($event) => $options.onTriggerEvent("keydown", $event)),
    v: common_vendor.o(($event) => $options.onTriggerEvent("keyup", $event)),
    w: common_vendor.o(($event) => $options.onTriggerEvent("mousedown", $event)),
    x: common_vendor.o(($event) => $options.onTriggerEvent("touchstart", $event))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-btn/q-btn.vue"]]);
wx.createComponent(Component);
