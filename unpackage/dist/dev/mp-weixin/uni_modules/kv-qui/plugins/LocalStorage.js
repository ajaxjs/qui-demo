"use strict";
const uni_modules_kvQui_utils_private_webStorage = require("../utils/private/web-storage.js");
const storage = uni_modules_kvQui_utils_private_webStorage.getStorage();
const Plugin = {
  install(opts) {
    const { $q } = opts;
    $q.localStorage = storage;
  }
};
Object.assign(Plugin, storage);
exports.Plugin = Plugin;
