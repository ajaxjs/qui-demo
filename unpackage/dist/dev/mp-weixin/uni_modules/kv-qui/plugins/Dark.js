"use strict";
const uni_modules_kvQui_utils_private_defineReactivePlugin = require("../utils/private/define-reactive-plugin.js");
const Plugin = uni_modules_kvQui_utils_private_defineReactivePlugin.defineReactivePlugin({
  isActive: false,
  mode: false
}, {
  __media: void 0,
  set(val) {
    Plugin.mode = val;
    Plugin.isActive = val === true;
  },
  toggle() {
    Plugin.set(Plugin.isActive === false);
  },
  install({ $q }) {
    let { dark } = $q.config;
    if (dark === void 0) {
      const { osTheme } = $q.platform;
      dark = osTheme && osTheme == "dark";
    }
    $q.dark = this;
    if (this.__installed === true && dark === void 0) {
      return;
    }
    this.isActive = dark === true;
    const initialVal = dark !== void 0 ? dark : false;
    this.set(initialVal);
  }
});
exports.Plugin = Plugin;
