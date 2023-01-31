"use strict";
const common_vendor = require("../../../common/vendor.js");
const Platform = {
  install(opts) {
    const { $q } = opts;
    const platform = Object.assign(
      common_vendor.index.getWindowInfo(),
      common_vendor.index.getSystemInfoSync()
    );
    $q.platform = platform;
  }
};
exports.Platform = Platform;
