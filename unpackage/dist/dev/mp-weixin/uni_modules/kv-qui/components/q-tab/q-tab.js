"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const uni_modules_kvQui_utils_private_symbols = require("../../utils/private/symbols.js");
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QTab",
  props: {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    alertIcon: String,
    name: {
      type: [Number, String],
      default: () => `t_${id++}`
    },
    noCaps: Boolean,
    tabindex: [String, Number],
    disable: Boolean,
    contentClass: String,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  setup(props, { slots, emit }) {
    const $tabs = common_vendor.inject(uni_modules_kvQui_utils_private_symbols.tabsKey, uni_modules_kvQui_utils_private_symbols.emptyRenderFn);
    if ($tabs === uni_modules_kvQui_utils_private_symbols.emptyRenderFn) {
      console.error("QTab component needs to be child of QTabs");
      return uni_modules_kvQui_utils_private_symbols.emptyRenderFn;
    }
    const blurTargetRef = common_vendor.ref(null);
    const rootRef = common_vendor.ref(null);
    const tabIndicatorRef = common_vendor.ref(null);
    const isActive = common_vendor.computed$1(() => $tabs.currentModel.value === props.name);
    const classes = common_vendor.computed$1(
      () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer")
    );
    const innerClass = common_vendor.computed$1(
      () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
    );
    const narrow = $tabs.tabProps.value.narrowIndicator;
    return {
      tabs: $tabs,
      rootRef,
      classes,
      innerClass,
      narrow,
      rootRef,
      blurTargetRef,
      tabIndicatorRef
    };
  },
  methods: {
    onClick(e) {
      if (this.disable === true) {
        return;
      }
      this.ripple && this.$refs.ripple.ripple(e);
      this.tabs.updateModel({ name: this.name });
      this.$emit("click", e);
    }
  }
});
if (!Array) {
  const _easycom_q_icon2 = common_vendor.resolveComponent("q-icon");
  const _easycom_q_ripple2 = common_vendor.resolveComponent("q-ripple");
  (_easycom_q_icon2 + _easycom_q_ripple2)();
}
const _easycom_q_icon = () => "../q-icon/q-icon.js";
const _easycom_q_ripple = () => "../q-ripple/q-ripple.js";
if (!Math) {
  (_easycom_q_icon + _easycom_q_ripple)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.narrow === false
  }, _ctx.narrow === false ? {
    b: common_vendor.n(_ctx.tabs.tabProps.value.indicatorClass)
  } : {}, {
    c: _ctx.blurTargetRef,
    d: -1,
    e: _ctx.icon !== void 0
  }, _ctx.icon !== void 0 ? {
    f: common_vendor.p({
      name: _ctx.icon,
      className: "q-tab__icon"
    })
  } : {}, {
    g: _ctx.label !== void 0
  }, _ctx.label !== void 0 ? {
    h: common_vendor.t(_ctx.label)
  } : {}, {
    i: _ctx.narrow === true
  }, _ctx.narrow === true ? {
    j: common_vendor.n(_ctx.tabs.tabProps.value.indicatorClass)
  } : {}, {
    k: _ctx.alert && _ctx.alertIcon
  }, _ctx.alert && _ctx.alertIcon ? {
    l: common_vendor.p({
      className: "q-tab__alert-icon",
      name: _ctx.alertIcon,
      color: _ctx.alert !== true ? _ctx.alert : ""
    })
  } : _ctx.alert ? {
    n: common_vendor.n(_ctx.alert !== true ? "text-" + _ctx.alert : "")
  } : {}, {
    m: _ctx.alert,
    o: common_vendor.n(_ctx.innerClass),
    p: !_ctx.disable
  }, !_ctx.disable ? {
    q: common_vendor.sr("ripple", "91df9df4-2")
  } : {}, {
    r: common_vendor.n(_ctx.classes),
    s: common_vendor.o((...args) => _ctx.onClick && _ctx.onClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-tab/q-tab.vue"]]);
wx.createComponent(Component);
