"use strict";
const common_vendor = require("../../../../common/vendor.js");
const createComponent = (raw) => common_vendor.markRaw(common_vendor.defineComponent(raw));
exports.createComponent = createComponent;
