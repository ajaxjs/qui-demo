"use strict";
const common_vendor = require("../../../common/vendor.js");
const uni_modules_kvQui_utils_private_symbols = require("../utils/private/symbols.js");
function useFormChild({ validate, resetValidation, requiresQForm }) {
  const $form = common_vendor.inject(uni_modules_kvQui_utils_private_symbols.formKey, false);
  if ($form !== false) {
    const { props, proxy } = common_vendor.getCurrentInstance();
    Object.assign(proxy, { validate, resetValidation });
    common_vendor.watch(() => props.disable, (val) => {
      if (val === true) {
        typeof resetValidation === "function" && resetValidation();
        $form.unbindComponent(proxy);
      } else {
        $form.bindComponent(proxy);
      }
    });
    common_vendor.onMounted(() => {
      props.disable !== true && $form.bindComponent(proxy);
    });
    common_vendor.onBeforeUnmount(() => {
      props.disable !== true && $form.unbindComponent(proxy);
    });
  } else if (requiresQForm === true) {
    console.error("Parent QForm not found on useFormChild()!");
  }
}
exports.useFormChild = useFormChild;
