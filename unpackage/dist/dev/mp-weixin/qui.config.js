"use strict";
const uni_modules_kvQui_plugins_LocalStorage = require("./uni_modules/kv-qui/plugins/LocalStorage.js");
const QuiConfig = {
  config: {
    headHeight: 44,
    footHeight: 50,
    notify: {
      position: "top",
      timeout: 2500
    },
    webViewPath: "/pages/index/broswer"
  },
  iconSet: {
    icon: "material-icons",
    field: {
      error: "error",
      clear: "cancel"
    }
  },
  lang: "zh-CN",
  plugins: [
    uni_modules_kvQui_plugins_LocalStorage.Plugin
  ]
};
exports.QuiConfig = QuiConfig;
