"use strict";
const uni_modules_kvQui_utils_uniapp_page = require("./page.js");
const uni_modules_kvQui_utils_uniapp_alert = require("./alert.js");
const uni_modules_kvQui_utils_uniapp_toast = require("./toast.js");
const uni_modules_kvQui_utils_uniapp_actionSheet = require("./action-sheet.js");
const uni_modules_kvQui_utils_uniapp_openUrl = require("./open-url.js");
const uniApi = {
  page: uni_modules_kvQui_utils_uniapp_page.page,
  alert: uni_modules_kvQui_utils_uniapp_alert.alert,
  toast: uni_modules_kvQui_utils_uniapp_toast.toast,
  actions: uni_modules_kvQui_utils_uniapp_actionSheet.actions,
  openUrl: uni_modules_kvQui_utils_uniapp_openUrl.openUrl,
  parseUrl: uni_modules_kvQui_utils_uniapp_openUrl.parseUrl,
  install({ parentApp, $q }) {
    this.openUrl = (evt) => {
      const { webViewPath } = $q.config;
      evt = uni_modules_kvQui_utils_uniapp_openUrl.formatParam(evt, { root: webViewPath });
      uni_modules_kvQui_utils_uniapp_openUrl.openUrl(evt);
    };
    parentApp.config.globalProperties.$uni = this;
  }
};
exports.uniApi = uniApi;
