"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_private_injectObjProp = require("./inject-obj-prop.js");
const defineReactivePlugin = (state, plugin) => {
  const reactiveState = common_vendor.reactive(state);
  for (const name in state) {
    uni_modules_kvQui_utils_private_injectObjProp.injectProp(
      plugin,
      name,
      () => reactiveState[name],
      (val) => {
        reactiveState[name] = val;
      }
    );
  }
  return plugin;
};
exports.defineReactivePlugin = defineReactivePlugin;
