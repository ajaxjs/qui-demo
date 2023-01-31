"use strict";
const uni_modules_kvQui_composables_private_useField = require("../../composables/private/use-field.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../composables/private/use-dark.js");
require("../../composables/private/use-validate.js");
require("../../composables/use-form-child.js");
require("../../utils/private/symbols.js");
require("../../utils/patterns.js");
require("../../utils/debounce.js");
require("../../utils/private/inject-obj-prop.js");
require("../../composables/private/use-split-attrs.js");
require("../../utils/uid.js");
require("../../utils/event.js");
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QField",
  inheritAttrs: false,
  props: uni_modules_kvQui_composables_private_useField.useFieldProps,
  emits: uni_modules_kvQui_composables_private_useField.useFieldEmits,
  setup() {
    return uni_modules_kvQui_composables_private_useField.useField(uni_modules_kvQui_composables_private_useField.useFieldState());
  }
});
if (!Array) {
  const _easycom_q_icon2 = common_vendor.resolveComponent("q-icon");
  const _easycom_q_spinner2 = common_vendor.resolveComponent("q-spinner");
  const _easycom_q_btn2 = common_vendor.resolveComponent("q-btn");
  (_easycom_q_icon2 + _easycom_q_spinner2 + _easycom_q_btn2)();
}
const _easycom_q_icon = () => "../q-icon/q-icon.js";
const _easycom_q_spinner = () => "../q-spinner/q-spinner.js";
const _easycom_q_btn = () => "../q-btn/q-btn.js";
if (!Math) {
  (_easycom_q_icon + _easycom_q_spinner + _easycom_q_btn)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.$slots.before
  }, _ctx.$slots.before ? {} : {}, {
    b: _ctx.$slots.prepend
  }, _ctx.$slots.prepend ? {} : {}, {
    c: _ctx.prefix !== void 0 && _ctx.prefix !== null
  }, _ctx.prefix !== void 0 && _ctx.prefix !== null ? {
    d: common_vendor.t(_ctx.prefix)
  } : {}, {
    e: _ctx.$slots.rawControl
  }, _ctx.$slots.rawControl ? {} : {}, {
    f: _ctx.$slots.control
  }, _ctx.$slots.control ? {
    g: common_vendor.r("control", {
      id: _ctx.state.targetUid.value
    }),
    h: _ctx.state.targetRef,
    i: -1,
    j: _ctx.state.targetUid.value,
    k: _ctx.autofocus === true || void 0
  } : {}, {
    l: _ctx.hasLabel === true
  }, _ctx.hasLabel === true ? common_vendor.e({
    m: _ctx.$slots.label
  }, _ctx.$slots.label ? {} : {
    n: common_vendor.t(_ctx.label)
  }, {
    o: common_vendor.n(_ctx.labelClass)
  }) : {}, {
    p: _ctx.hasError === true && !_ctx.noErrorIcon
  }, _ctx.hasError === true && !_ctx.noErrorIcon ? {
    q: common_vendor.p({
      name: _ctx.$q.iconSet.field.error,
      color: "negative"
    }),
    r: common_vendor.n(_ctx.appendClass)
  } : {}, {
    s: _ctx.loading === true || _ctx.state.innerLoading === true
  }, _ctx.loading === true || _ctx.state.innerLoading === true ? common_vendor.e({
    t: _ctx.$slots.loading
  }, _ctx.$slots.loading ? {} : {
    v: common_vendor.p({
      color: _ctx.color
    })
  }, {
    w: common_vendor.n(_ctx.appendClass)
  }) : _ctx.clearable === true && _ctx.state.hasValue === true && _ctx.state.editable === true ? {
    y: common_vendor.o(_ctx.clearValue),
    z: common_vendor.p({
      icon: _ctx.clearIcon || _ctx.$q.iconSet.field.clear,
      tabindex: 0,
      ["aria-hidden"]: null,
      role: null
    }),
    A: common_vendor.n(_ctx.appendClass)
  } : {}, {
    x: _ctx.clearable === true && _ctx.state.hasValue === true && _ctx.state.editable === true,
    B: _ctx.$slots.append
  }, _ctx.$slots.append ? {
    C: common_vendor.o((...args) => _ctx.prevent && _ctx.prevent(...args))
  } : {}, {
    D: _ctx.state.controlRef,
    E: common_vendor.n(_ctx.contentClass),
    F: -1,
    G: _ctx.shouldRenderBottom === true
  }, _ctx.shouldRenderBottom === true ? common_vendor.e({
    H: _ctx.hasError
  }, _ctx.hasError ? common_vendor.e({
    I: _ctx.errorMessage !== null
  }, _ctx.errorMessage !== null ? {
    J: common_vendor.t(_ctx.errorMessage),
    K: `q--slot-error-${_ctx.errorMessage.value}`
  } : {
    L: common_vendor.r("error", {
      key: "q--slot-error"
    })
  }) : _ctx.hideHint !== true || _ctx.state.focused.value === true ? common_vendor.e({
    N: _ctx.hint
  }, _ctx.hint ? {
    O: common_vendor.t(_ctx.hint),
    P: `q--slot-hint-${_ctx.hint}`
  } : {
    Q: common_vendor.r("hint", {
      key: "q--slot-hint"
    })
  }) : {}, {
    M: _ctx.hideHint !== true || _ctx.state.focused.value === true,
    R: _ctx.hasCounter
  }, _ctx.hasCounter ? common_vendor.e({
    S: _ctx.$slots.counter
  }, _ctx.$slots.counter ? {} : {
    T: common_vendor.t(_ctx.state.computedCounter.value)
  }) : {}, {
    U: common_vendor.n(`q-field__bottom row items-start q-field__bottom--${_ctx.hideBottomSpace !== true ? "animated" : "stale"}`),
    V: common_vendor.o((...args) => _ctx.prevent && _ctx.prevent(...args))
  }) : {}, {
    W: _ctx.$slots.after
  }, _ctx.$slots.after ? {} : {}, {
    X: _ctx.labelAttrs.for,
    Y: _ctx.state.rootRef,
    Z: common_vendor.n(_ctx.classes),
    aa: common_vendor.s(_ctx.style)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-field/q-field.vue"]]);
wx.createComponent(Component);
