"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useField = require("../../composables/private/use-field.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const uni_modules_kvQui_composables_private_useForm = require("../../composables/private/use-form.js");
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
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...uni_modules_kvQui_composables_private_useField.useFieldProps,
    ...uni_modules_kvQui_composables_private_useForm.useFormProps,
    modelValue: {
      required: false
    },
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    password: Boolean,
    autoFocus: Boolean,
    confirmType: { type: String, default: "done" },
    confirmHold: Boolean,
    adjustPosition: { type: Boolean, default: true },
    autoBlur: Boolean
  },
  emits: [
    ...uni_modules_kvQui_composables_private_useField.useFieldEmits,
    "paste",
    "change"
  ],
  setup(props, { emit }) {
    const inputRef = common_vendor.ref(null);
    let innerValue = common_vendor.ref(props.modelValue), valTimer;
    common_vendor.watch(() => props.modelValue, (val) => {
      if (props.debounce !== void 0) {
        clearTimeout(valTimer);
        valTimer = setTimeout(() => {
          innerValue.value = val;
        }, props.debounce);
      } else {
        innerValue.value = val;
      }
    });
    const nameProp = uni_modules_kvQui_composables_private_useForm.useFormInputNameAttr(props);
    const hasValue = common_vendor.computed$1(() => uni_modules_kvQui_composables_private_useField.fieldValueIsFilled(innerValue.value));
    const state = uni_modules_kvQui_composables_private_useField.useFieldState();
    const isTextarea = common_vendor.computed$1(() => props.type === "textarea" || props.autogrow === true);
    let emitTimer, emitValueFn;
    function emitValue(val) {
      emitValueFn = () => {
        emit("update:modelValue", val);
      };
      if (props.debounce !== void 0) {
        clearTimeout(emitTimer);
        emitTimer = setTimeout(emitValueFn, props.debounce);
      } else {
        emitValueFn();
      }
    }
    function onInput(e) {
      if (!e || !e.detail)
        return;
      innerValue.value = e.detail.value;
      emitValue(innerValue.value);
    }
    function onConfirm(e) {
      innerValue.value = e.detail.value;
      emit("confirm", innerValue.value);
      emitValue(innerValue.value);
    }
    Object.assign(state, {
      fieldClass: common_vendor.computed$1(
        () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")
      ),
      hasShadow: common_vendor.computed$1(
        () => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length > 0
      ),
      inputRef,
      hasValue,
      floatingLabel: common_vendor.computed$1(
        () => hasValue.value === true || uni_modules_kvQui_composables_private_useField.fieldValueIsFilled(props.displayValue)
      )
    });
    const renderFn = uni_modules_kvQui_composables_private_useField.useField(state);
    return {
      ...renderFn,
      nameProp,
      isTextarea,
      innerValue,
      onInput,
      onConfirm
    };
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
    f: _ctx.isTextarea
  }, _ctx.isTextarea ? {
    g: common_vendor.n(_ctx.inputClass),
    h: _ctx.innerValue,
    i: _ctx.state.targetUid.value,
    j: _ctx.nameProp,
    k: _ctx.autofocus === true || void 0,
    l: _ctx.label,
    m: _ctx.maxlength,
    n: _ctx.disable === true,
    o: _ctx.readonly === true,
    p: common_vendor.s(_ctx.inputStyle),
    q: _ctx.state.focused.value,
    r: _ctx.autogrow,
    s: _ctx.autoFocus,
    t: common_vendor.o((...args) => _ctx.onInput && _ctx.onInput(...args)),
    v: common_vendor.o((...args) => _ctx.onConfirm && _ctx.onConfirm(...args)),
    w: common_vendor.o((...args) => _ctx.state.controlEvents.onFocusin && _ctx.state.controlEvents.onFocusin(...args)),
    x: common_vendor.o((...args) => _ctx.state.controlEvents.onFocusout && _ctx.state.controlEvents.onFocusout(...args))
  } : {
    y: _ctx.type,
    z: common_vendor.n(_ctx.inputClass),
    A: _ctx.innerValue,
    B: _ctx.state.focused.value,
    C: _ctx.state.targetUid.value,
    D: _ctx.nameProp,
    E: _ctx.autofocus === true || void 0,
    F: _ctx.label,
    G: _ctx.maxlength,
    H: _ctx.disable === true,
    I: _ctx.readonly === true,
    J: common_vendor.s(_ctx.inputStyle),
    K: _ctx.password || _ctx.type == "password",
    L: _ctx.confirmType,
    M: _ctx.confirmHold,
    N: _ctx.adjustPosition,
    O: _ctx.autoBlur,
    P: common_vendor.o((...args) => _ctx.onInput && _ctx.onInput(...args)),
    Q: common_vendor.o((...args) => _ctx.onConfirm && _ctx.onConfirm(...args)),
    R: common_vendor.o((...args) => _ctx.state.controlEvents.onFocusin && _ctx.state.controlEvents.onFocusin(...args)),
    S: common_vendor.o((...args) => _ctx.state.controlEvents.onFocusout && _ctx.state.controlEvents.onFocusout(...args))
  }, {
    T: _ctx.hasLabel === true
  }, _ctx.hasLabel === true ? common_vendor.e({
    U: _ctx.$slots.label
  }, _ctx.$slots.label ? {} : {
    V: common_vendor.t(_ctx.label)
  }, {
    W: common_vendor.n(_ctx.labelClass)
  }) : {}, {
    X: _ctx.hasError === true && !_ctx.noErrorIcon
  }, _ctx.hasError === true && !_ctx.noErrorIcon ? {
    Y: common_vendor.p({
      name: _ctx.$q.iconSet.field.error,
      color: "negative"
    }),
    Z: common_vendor.n(_ctx.appendClass)
  } : {}, {
    aa: _ctx.loading === true || _ctx.state.innerLoading === true
  }, _ctx.loading === true || _ctx.state.innerLoading === true ? common_vendor.e({
    ab: _ctx.$slots.loading
  }, _ctx.$slots.loading ? {} : {
    ac: common_vendor.p({
      color: _ctx.color
    })
  }, {
    ad: common_vendor.n(_ctx.appendClass)
  }) : _ctx.clearable === true && _ctx.state.hasValue === true && _ctx.state.editable === true ? {
    af: common_vendor.o(_ctx.clearValue),
    ag: common_vendor.p({
      icon: _ctx.clearIcon || _ctx.$q.iconSet.field.clear,
      tabindex: 0,
      ["aria-hidden"]: null,
      role: null
    }),
    ah: common_vendor.n(_ctx.appendClass)
  } : {}, {
    ae: _ctx.clearable === true && _ctx.state.hasValue === true && _ctx.state.editable === true,
    ai: _ctx.$slots.append
  }, _ctx.$slots.append ? {
    aj: common_vendor.o((...args) => _ctx.prevent && _ctx.prevent(...args))
  } : {}, {
    ak: _ctx.state.controlRef,
    al: common_vendor.n(_ctx.contentClass),
    am: -1,
    an: common_vendor.o(($event) => _ctx.state.focused.value = true),
    ao: _ctx.shouldRenderBottom === true
  }, _ctx.shouldRenderBottom === true ? common_vendor.e({
    ap: _ctx.hasError
  }, _ctx.hasError ? common_vendor.e({
    aq: _ctx.errorMessage !== null
  }, _ctx.errorMessage !== null ? {
    ar: common_vendor.t(_ctx.errorMessage),
    as: `q--slot-error-${_ctx.errorMessage.value}`
  } : {
    at: common_vendor.r("error", {
      key: "q--slot-error"
    })
  }) : _ctx.hideHint !== true || _ctx.state.focused.value === true ? common_vendor.e({
    aw: _ctx.hint
  }, _ctx.hint ? {
    ax: common_vendor.t(_ctx.hint),
    ay: `q--slot-hint-${_ctx.hint}`
  } : {
    az: common_vendor.r("hint", {
      key: "q--slot-hint"
    })
  }) : {}, {
    av: _ctx.hideHint !== true || _ctx.state.focused.value === true,
    aA: _ctx.hasCounter
  }, _ctx.hasCounter ? common_vendor.e({
    aB: _ctx.$slots.counter
  }, _ctx.$slots.counter ? {} : {
    aC: common_vendor.t(_ctx.state.computedCounter.value)
  }) : {}, {
    aD: common_vendor.n(`q-field__bottom row items-start q-field__bottom--${_ctx.hideBottomSpace !== true ? "animated" : "stale"}`),
    aE: common_vendor.o((...args) => _ctx.prevent && _ctx.prevent(...args))
  }) : {}, {
    aF: _ctx.$slots.after
  }, _ctx.$slots.after ? {} : {}, {
    aG: _ctx.labelAttrs.for,
    aH: _ctx.state.rootRef,
    aI: common_vendor.n(_ctx.classes),
    aJ: common_vendor.s(_ctx.style)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-input/q-input.vue"]]);
wx.createComponent(Component);
