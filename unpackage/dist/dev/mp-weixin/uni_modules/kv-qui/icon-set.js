"use strict";
const uni_modules_kvQui_utils_private_defineReactivePlugin = require("./utils/private/define-reactive-plugin.js");
const uni_modules_kvQui_utils_private_injectObjProp = require("./utils/private/inject-obj-prop.js");
const uni_modules_kvQui_iconSet_materialIcons = require("./icon-set/material-icons.js");
const Plugin = uni_modules_kvQui_utils_private_defineReactivePlugin.defineReactivePlugin({
  iconMapFn: null,
  __icons: {}
}, {
  set(setObject) {
    const def = { ...setObject, rtl: setObject.rtl === true };
    def.set = Plugin.set;
    Object.assign(Plugin.__icons, def);
  },
  install({ $q, iconSet }) {
    if ($q.config.iconMapFn !== void 0) {
      this.iconMapFn = $q.config.iconMapFn;
    }
    $q.iconSet = this.__icons;
    uni_modules_kvQui_utils_private_injectObjProp.injectProp($q, "iconMapFn", () => this.iconMapFn, (val) => {
      this.iconMapFn = val;
    });
    if (this.__installed === true) {
      iconSet !== void 0 && this.set(iconSet);
    } else {
      this.set(iconSet || uni_modules_kvQui_iconSet_materialIcons.materialIcons);
    }
  }
});
exports.Plugin = Plugin;
