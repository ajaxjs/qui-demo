"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useFormProps = {
  name: String
};
function useFormInputNameAttr(props) {
  return common_vendor.computed$1(() => props.name || props.for);
}
exports.useFormInputNameAttr = useFormInputNameAttr;
exports.useFormProps = useFormProps;
