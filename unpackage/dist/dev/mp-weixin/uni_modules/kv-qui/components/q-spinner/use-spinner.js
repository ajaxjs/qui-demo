"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useSize = require("../../composables/private/use-size.js");
const useSpinnerProps = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function useSpinner(props) {
  const cSize = common_vendor.computed$1(() => props.size in uni_modules_kvQui_composables_private_useSize.useSizeDefaults ? `${uni_modules_kvQui_composables_private_useSize.useSizeDefaults[props.size]}px` : props.size);
  return {
    cSize,
    classes: common_vendor.computed$1(() => "q-spinner" + (props.color ? ` text-${props.color}` : ""))
  };
}
exports.useSpinner = useSpinner;
exports.useSpinnerProps = useSpinnerProps;
