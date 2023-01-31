"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_private_vm = require("../../utils/private/vm.js");
function useTimeout() {
  let timer;
  const vm = common_vendor.getCurrentInstance();
  function removeTimeout() {
    clearTimeout(timer);
  }
  common_vendor.onDeactivated(removeTimeout);
  common_vendor.onBeforeUnmount(removeTimeout);
  return {
    removeTimeout,
    registerTimeout(fn, delay) {
      clearTimeout(timer);
      if (uni_modules_kvQui_utils_private_vm.vmIsDestroyed(vm) === false) {
        timer = setTimeout(fn, delay);
      }
    }
  };
}
exports.useTimeout = useTimeout;
