"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_useFormChild = require("../use-form-child.js");
const uni_modules_kvQui_utils_patterns = require("../../utils/patterns.js");
const uni_modules_kvQui_utils_debounce = require("../../utils/debounce.js");
const uni_modules_kvQui_utils_private_injectObjProp = require("../../utils/private/inject-obj-prop.js");
const lazyRulesValues = [true, false, "ondemand"];
const useValidateProps = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    validator: (v) => lazyRulesValues.includes(v)
  }
};
function useValidate(focused, innerLoading) {
  const { props, proxy } = common_vendor.getCurrentInstance();
  const innerError = common_vendor.ref(false);
  const innerErrorMessage = common_vendor.ref(null);
  const isDirtyModel = common_vendor.ref(null);
  uni_modules_kvQui_composables_useFormChild.useFormChild({ validate, resetValidation });
  let validateIndex = 0, unwatchRules;
  const hasRules = common_vendor.computed$1(
    () => props.rules !== void 0 && props.rules !== null && props.rules.length > 0
  );
  const hasActiveRules = common_vendor.computed$1(
    () => props.disable !== true && hasRules.value === true
  );
  const hasError = common_vendor.computed$1(
    () => props.error === true || innerError.value === true
  );
  const errorMessage = common_vendor.computed$1(() => typeof props.errorMessage === "string" && props.errorMessage.length > 0 ? props.errorMessage : innerErrorMessage.value);
  common_vendor.watch(() => props.modelValue, () => {
    validateIfNeeded();
  });
  common_vendor.watch(() => props.reactiveRules, (val) => {
    if (val === true) {
      if (unwatchRules === void 0) {
        unwatchRules = common_vendor.watch(() => props.rules, () => {
          validateIfNeeded(true);
        });
      }
    } else if (unwatchRules !== void 0) {
      unwatchRules();
      unwatchRules = void 0;
    }
  }, { immediate: true });
  common_vendor.watch(focused, (val) => {
    if (val === true) {
      if (isDirtyModel.value === null) {
        isDirtyModel.value = false;
      }
    } else if (isDirtyModel.value === false) {
      isDirtyModel.value = true;
      if (hasActiveRules.value === true && props.lazyRules !== "ondemand" && innerLoading.value === false) {
        debouncedValidate();
      }
    }
  });
  function resetValidation() {
    validateIndex++;
    innerLoading.value = false;
    isDirtyModel.value = null;
    innerError.value = false;
    innerErrorMessage.value = null;
    debouncedValidate.cancel();
  }
  function validate(val = props.modelValue) {
    if (hasActiveRules.value !== true) {
      return true;
    }
    const index = ++validateIndex;
    const setDirty = innerLoading.value !== true ? () => {
      isDirtyModel.value = true;
    } : () => {
    };
    const update = (err, msg) => {
      err === true && setDirty();
      innerError.value = err;
      innerErrorMessage.value = msg || null;
      innerLoading.value = false;
    };
    const promises = [];
    for (let i = 0; i < props.rules.length; i++) {
      const rule = props.rules[i];
      let res;
      if (typeof rule === "function") {
        res = rule(val, uni_modules_kvQui_utils_patterns.testPattern);
      } else if (typeof rule === "string" && uni_modules_kvQui_utils_patterns.testPattern[rule] !== void 0) {
        res = uni_modules_kvQui_utils_patterns.testPattern[rule](val);
      }
      if (res === false || typeof res === "string") {
        update(true, res);
        return false;
      } else if (res !== true && res !== void 0) {
        promises.push(res);
      }
    }
    if (promises.length === 0) {
      update(false);
      return true;
    }
    innerLoading.value = true;
    return Promise.all(promises).then(
      (res) => {
        if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
          index === validateIndex && update(false);
          return true;
        }
        const msg = res.find((r) => r === false || typeof r === "string");
        index === validateIndex && update(msg !== void 0, msg);
        return msg === void 0;
      },
      (e) => {
        if (index === validateIndex) {
          console.error(e);
          update(true);
        }
        return false;
      }
    );
  }
  function validateIfNeeded(changedRules) {
    if (hasActiveRules.value === true && props.lazyRules !== "ondemand" && (isDirtyModel.value === true || props.lazyRules !== true && changedRules !== true)) {
      debouncedValidate();
    }
  }
  const debouncedValidate = uni_modules_kvQui_utils_debounce.debounce(validate, 0);
  common_vendor.onBeforeUnmount(() => {
    unwatchRules !== void 0 && unwatchRules();
    debouncedValidate.cancel();
  });
  Object.assign(proxy, { resetValidation, validate });
  uni_modules_kvQui_utils_private_injectObjProp.injectProp(proxy, "hasError", () => hasError.value);
  return {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    validate,
    resetValidation
  };
}
exports.useValidate = useValidate;
exports.useValidateProps = useValidateProps;
