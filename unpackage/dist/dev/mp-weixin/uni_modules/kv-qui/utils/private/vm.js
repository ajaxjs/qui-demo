"use strict";
function vmHasRouter(vm) {
  return vm.appContext.config.globalProperties.$router !== void 0;
}
function vmIsDestroyed(vm) {
  return vm.isUnmounted === true || vm.isDeactivated === true;
}
exports.vmHasRouter = vmHasRouter;
exports.vmIsDestroyed = vmIsDestroyed;
