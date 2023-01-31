"use strict";
const uni_modules_kvQui_utils_private_symbols = require("./utils/private/symbols.js");
const uni_modules_kvQui_iconSet = require("./icon-set.js");
const uni_modules_kvQui_plugins_Dark = require("./plugins/Dark.js");
const uni_modules_kvQui_plugins_Platform = require("./plugins/Platform.js");
const uni_modules_kvQui_plugins_ClosePopup = require("./plugins/ClosePopup.js");
const uni_modules_kvQui_utils = require("./utils.js");
const uni_modules_kvQui_utils_uniapp_index = require("./utils/uniapp/index.js");
const colors = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey"];
const autoInstalledPlugins = [
  uni_modules_kvQui_plugins_Platform.Platform,
  uni_modules_kvQui_plugins_ClosePopup.ClosePopup,
  uni_modules_kvQui_plugins_Dark.Plugin,
  uni_modules_kvQui_iconSet.Plugin
];
function installPlugins(pluginOpts, pluginList) {
  pluginList.forEach((Plugin) => {
    Plugin.install(pluginOpts);
    Plugin.__installed = true;
  });
}
const install = (app, uiOpts = {}) => {
  const $q = { utils: uni_modules_kvQui_utils.utils, version: "2.10.1", colors };
  $q.config = Object.assign(uiOpts.config || {}, { headHeight: 44, footHeight: 50 });
  app.config.globalProperties.$q = $q;
  app.provide(uni_modules_kvQui_utils_private_symbols.quasarKey, $q);
  console.log("--", $q);
  const pluginOpts = {
    parentApp: app,
    $q,
    lang: uiOpts.lang,
    iconSet: uiOpts.iconSet
  };
  installPlugins(pluginOpts, autoInstalledPlugins);
  uiOpts.plugins !== void 0 && installPlugins(pluginOpts, uiOpts.plugins);
  uni_modules_kvQui_utils_uniapp_index.uniApi.install(pluginOpts);
};
const Qui = {
  install
};
exports.Qui = Qui;
