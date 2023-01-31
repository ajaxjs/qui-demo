"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const uni_modules_kvQui_utils_private_focusManager = require("../../utils/private/focus-manager.js");
const uni_modules_kvQui_utils_private_symbols = require("../../utils/private/symbols.js");
const uni_modules_kvQui_utils_private_vm = require("../../utils/private/vm.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QForm",
  inheritAttrs: false,
  props: {
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(props, { slots, emit, attrs }) {
    const vm = common_vendor.getCurrentInstance();
    const rootRef = common_vendor.ref(null);
    let validateIndex = 0;
    const registeredComponents = [];
    function validate(shouldFocus) {
      const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props.noErrorFocus !== true;
      const index = ++validateIndex;
      const emitEvent = (res, ref) => {
        emit("validation" + (res === true ? "Success" : "Error"), ref);
      };
      const validateComponent = (comp) => {
        const valid = comp.validate();
        return typeof valid.then === "function" ? valid.then(
          (valid2) => ({
            valid: valid2,
            comp
          }),
          (err) => ({
            valid: false,
            comp,
            err
          })
        ) : Promise.resolve({
          valid,
          comp
        });
      };
      const errorsPromise = props.greedy === true ? Promise.all(registeredComponents.map(validateComponent)).then((res) => res.filter((r) => r.valid !== true)) : registeredComponents.reduce(
        (acc, comp) => acc.then(() => {
          return validateComponent(comp).then((r) => {
            if (r.valid === false) {
              return Promise.reject(r);
            }
          });
        }),
        Promise.resolve()
      ).catch((error) => [error]);
      return errorsPromise.then((errors) => {
        if (errors === void 0 || errors.length === 0) {
          index === validateIndex && emitEvent(true);
          return true;
        }
        if (index === validateIndex) {
          const {
            comp,
            err
          } = errors[0];
          err !== void 0 && console.error(err);
          emitEvent(false, comp);
          if (focus2 === true) {
            const activeError = errors.find(({
              comp: comp2
            }) => typeof comp2.focus === "function" && uni_modules_kvQui_utils_private_vm.vmIsDestroyed(comp2.$) === false);
            if (activeError !== void 0) {
              activeError.comp.focus();
            }
          }
        }
        return false;
      });
    }
    function resetValidation() {
      validateIndex++;
      registeredComponents.forEach((comp) => {
        typeof comp.resetValidation === "function" && comp.resetValidation();
      });
    }
    function submit(evt) {
      const index = validateIndex + 1;
      validate().then((val) => {
        if (index === validateIndex && val === true) {
          if (props.onSubmit !== void 0) {
            emit("submit", evt);
          } else if (evt !== void 0 && evt.target !== void 0 && typeof evt.target.submit === "function") {
            evt.target.submit();
          }
        }
      });
    }
    function reset(evt) {
      emit("reset");
      common_vendor.nextTick(() => {
        resetValidation();
        if (props.autofocus === true && props.noResetFocus !== true) {
          focus();
        }
      });
    }
    function focus() {
      uni_modules_kvQui_utils_private_focusManager.addFocusFn(() => {
        if (rootRef.value === null) {
          return;
        }
        const target = rootRef.value.querySelector(
          "[autofocus][tabindex], [data-autofocus][tabindex]"
        ) || rootRef.value.querySelector(
          "[autofocus] [tabindex], [data-autofocus] [tabindex]"
        ) || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex > -1);
        target !== null && target !== void 0 && target.focus({
          preventScroll: true
        });
      });
    }
    common_vendor.provide(uni_modules_kvQui_utils_private_symbols.formKey, {
      bindComponent(vmProxy) {
        registeredComponents.push(vmProxy);
      },
      unbindComponent(vmProxy) {
        const index = registeredComponents.indexOf(vmProxy);
        if (index > -1) {
          registeredComponents.splice(index, 1);
        }
      }
    });
    let shouldActivate = false;
    common_vendor.onDeactivated(() => {
      shouldActivate = true;
    });
    common_vendor.onActivated(() => {
      shouldActivate === true && props.autofocus === true && focus();
    });
    common_vendor.onMounted(() => {
      props.autofocus === true && focus();
    });
    Object.assign(vm.proxy, {
      validate,
      resetValidation,
      submit,
      reset,
      focus,
      getValidationComponents: () => registeredComponents
    });
    console.log(vm.proxy);
    return {
      submit,
      reset
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(_ctx.className),
    b: common_vendor.s(_ctx.styles),
    c: common_vendor.o((...args) => _ctx.submit && _ctx.submit(...args)),
    d: common_vendor.o((...args) => _ctx.reset && _ctx.reset(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-form/q-form.vue"]]);
wx.createComponent(Component);
