"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useDark = require("./use-dark.js");
const uni_modules_kvQui_composables_private_useValidate = require("./use-validate.js");
const uni_modules_kvQui_composables_private_useSplitAttrs = require("./use-split-attrs.js");
const uni_modules_kvQui_utils_uid = require("../../utils/uid.js");
const uni_modules_kvQui_utils_event = require("../../utils/event.js");
function getTargetUid(val) {
  return val === void 0 ? `f_${uni_modules_kvQui_utils_uid.uid()}` : val;
}
function fieldValueIsFilled(val) {
  return val !== void 0 && val !== null && ("" + val).length > 0;
}
const useFieldProps = {
  ...uni_modules_kvQui_composables_private_useDark.useDarkProps,
  ...uni_modules_kvQui_composables_private_useValidate.useValidateProps,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String,
  maxlength: {
    type: [Number, String],
    default: 140
  }
};
const useFieldEmits = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function useFieldState() {
  const { props, attrs, proxy, vnode } = common_vendor.getCurrentInstance();
  const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, proxy.$q);
  return {
    isDark,
    editable: common_vendor.computed$1(
      () => props.disable !== true && props.readonly !== true
    ),
    innerLoading: common_vendor.ref(false),
    focused: common_vendor.ref(props.autofocus),
    hasPopupOpen: false,
    splitAttrs: uni_modules_kvQui_composables_private_useSplitAttrs.useSplitAttrs(attrs, vnode),
    targetUid: common_vendor.ref(getTargetUid(props.for)),
    rootRef: common_vendor.ref(null),
    targetRef: common_vendor.ref(null),
    controlRef: common_vendor.ref(null)
  };
}
function useField(state) {
  const { props, emit, slots, attrs, proxy } = common_vendor.getCurrentInstance();
  const { $q } = proxy;
  let focusoutTimer;
  if (state.hasValue === void 0) {
    state.hasValue = common_vendor.computed$1(() => fieldValueIsFilled(props.modelValue));
  }
  if (state.emitValue === void 0) {
    state.emitValue = (value) => {
      emit("update:modelValue", value);
    };
  }
  if (state.controlEvents === void 0) {
    state.controlEvents = {
      onFocusin: onControlFocusin,
      onFocusout: onControlFocusout
    };
  }
  Object.assign(state, {
    clearValue,
    onControlFocusin,
    onControlFocusout
  });
  if (state.computedCounter === void 0) {
    state.computedCounter = common_vendor.computed$1(() => {
      if (props.counter !== false) {
        const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? ("" + props.modelValue).length : Array.isArray(props.modelValue) === true ? props.modelValue.length : 0;
        const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
        return len + (max !== void 0 ? " / " + max : "");
      }
    });
  }
  const {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    resetValidation
  } = uni_modules_kvQui_composables_private_useValidate.useValidate(state.focused, state.innerLoading);
  const floatingLabel = state.floatingLabel !== void 0 ? common_vendor.computed$1(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : common_vendor.computed$1(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
  const shouldRenderBottom = common_vendor.computed$1(
    () => props.bottomSlots === true || props.hint !== void 0 || hasRules.value === true || props.counter === true || props.error !== null
  );
  const styleType = common_vendor.computed$1(() => {
    if (props.filled === true) {
      return "filled";
    }
    if (props.outlined === true) {
      return "outlined";
    }
    if (props.borderless === true) {
      return "borderless";
    }
    if (props.standout) {
      return "standout";
    }
    return "standard";
  });
  const classes = common_vendor.computed$1(
    () => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded === true ? " q-field--rounded" : "") + (props.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props.dense === true ? " q-field--dense" : "") + (props.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props.disable === true ? " q-field--disabled" : props.readonly === true ? " q-field--readonly" : "")
  );
  const contentClass = common_vendor.computed$1(
    () => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props.standout === "string" && props.standout.length > 0 && state.focused.value === true ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : "")
  );
  const hasLabel = common_vendor.computed$1(
    () => props.labelSlot === true || props.label !== void 0
  );
  const labelClass = common_vendor.computed$1(
    () => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${props.labelColor}` : "")
  );
  const attributes = common_vendor.computed$1(() => {
    const acc = {
      for: state.targetUid.value
    };
    if (props.disable === true) {
      acc["aria-disabled"] = "true";
    } else if (props.readonly === true) {
      acc["aria-readonly"] = "true";
    }
    return acc;
  });
  common_vendor.watch(() => props.for, (val) => {
    state.targetUid.value = getTargetUid(val);
  });
  function onControlFocusin(e) {
    clearTimeout(focusoutTimer);
    if (state.editable.value === true && state.focused.value === false) {
      state.focused.value = true;
      emit("focus", e);
    }
  }
  function onControlFocusout(e) {
    clearTimeout(focusoutTimer);
    focusoutTimer = setTimeout(() => {
      if (state.hasPopupOpen === true) {
        return;
      }
      if (state.focused.value === true) {
        state.focused.value = false;
        emit("blur", e);
      }
    });
  }
  function clearValue(e) {
    uni_modules_kvQui_utils_event.stopAndPrevent(e);
    if ($q.platform.is.mobile !== true) {
      state.targetRef !== void 0 && state.targetRef.value || state.rootRef.value;
      state.focused.value = true;
    } else if (state.rootRef.value.contains(document.activeElement) === true) {
      document.activeElement.blur();
    }
    if (props.type === "file") {
      state.inputRef.value.value = null;
    }
    emit("update:modelValue", null);
    emit("clear", props.modelValue);
    common_vendor.nextTick(() => {
      resetValidation();
      if ($q.platform.is.mobile !== true) {
        isDirtyModel.value = false;
      }
    });
  }
  const hasCounter = props.counter === true || slots.counter !== void 0;
  const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
    ...state.splitAttrs.attributes.value,
    "data-autofocus": props.autofocus === true || void 0,
    ...attributes.value
  } : attributes.value;
  return {
    state,
    classes,
    style: attrs.style,
    hasLabel,
    labelClass,
    labelAttrs,
    hasCounter,
    contentClass,
    appendClass: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
    shouldRenderBottom,
    errorMessage,
    clearValue,
    prevent: uni_modules_kvQui_utils_event.prevent
  };
}
exports.fieldValueIsFilled = fieldValueIsFilled;
exports.useField = useField;
exports.useFieldEmits = useFieldEmits;
exports.useFieldProps = useFieldProps;
exports.useFieldState = useFieldState;
