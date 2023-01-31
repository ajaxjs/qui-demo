"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};
const useSizeProps = {
  size: String
};
function useSize(props, sizes = useSizeDefaults) {
  return common_vendor.computed$1(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
}
exports.useSize = useSize;
exports.useSizeDefaults = useSizeDefaults;
exports.useSizeProps = useSizeProps;
