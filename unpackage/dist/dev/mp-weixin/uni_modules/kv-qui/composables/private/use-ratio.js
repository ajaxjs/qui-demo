"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useRatioProps = {
  ratio: [String, Number]
};
function useRatio(props, naturalRatio) {
  return common_vendor.computed$1(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
exports.useRatio = useRatio;
exports.useRatioProps = useRatioProps;
