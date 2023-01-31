"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const uni_modules_kvQui_index = require("./uni_modules/kv-qui/index.js");
const qui_config = require("./qui.config.js");
require("./uni_modules/kv-qui/utils/private/symbols.js");
require("./uni_modules/kv-qui/icon-set.js");
require("./uni_modules/kv-qui/utils/private/define-reactive-plugin.js");
require("./uni_modules/kv-qui/utils/private/inject-obj-prop.js");
require("./uni_modules/kv-qui/icon-set/material-icons.js");
require("./uni_modules/kv-qui/plugins/Dark.js");
require("./uni_modules/kv-qui/plugins/Platform.js");
require("./uni_modules/kv-qui/plugins/ClosePopup.js");
require("./uni_modules/kv-qui/utils.js");
require("./uni_modules/kv-qui/utils/clone.js");
require("./uni_modules/kv-qui/utils/format.js");
require("./uni_modules/kv-qui/utils/uid.js");
require("./uni_modules/kv-qui/utils/is.js");
require("./uni_modules/kv-qui/utils/uniapp/index.js");
require("./uni_modules/kv-qui/utils/uniapp/page.js");
require("./uni_modules/kv-qui/utils/uniapp/open-url.js");
require("./uni_modules/kv-qui/plugins/LocalStorage.js");
require("./uni_modules/kv-qui/utils/private/web-storage.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/index/broswer.js";
  "./pages/layout/grid_row.js";
  "./pages/layout/gutter.js";
  "./pages/layout/layout.js";
  "./pages/components/icon.js";
  "./pages/components/avatar.js";
  "./pages/components/img.js";
  "./pages/components/btn.js";
  "./pages/components/badge.js";
  "./pages/components/card.js";
  "./pages/components/item.js";
  "./pages/components/link.js";
  "./pages/components/linear_progress.js";
  "./pages/components/input.js";
  "./pages/components/form.js";
  "./pages/components/checkbox.js";
  "./pages/components/dialog.js";
  "./pages/components/date_picker.js";
  "./pages/components/tabs.js";
  "./pages/components/swiper.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AppProject/qui-demo/App.vue"]]);
const Lanmu = () => "./components/Lanmu.js";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(uni_modules_kvQui_index.Qui, qui_config.QuiConfig);
  app.component("Lanmu", Lanmu);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
