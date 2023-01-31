"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props, $q) {
  return common_vendor.computed$1(() => props.dark === null ? $q.dark.isActive : props.dark);
}
exports.useDark = useDark;
exports.useDarkProps = useDarkProps;
