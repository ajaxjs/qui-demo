"use strict";
const common_vendor = require("../../../common/vendor.js");
const ClosePopup = {
  close(evt) {
    console.log("close-popup", evt);
    common_vendor.index.$emit("close-popup", evt);
  },
  install(opts) {
    const { $q } = opts;
    $q.closePopup = this.close;
  }
};
exports.ClosePopup = ClosePopup;
