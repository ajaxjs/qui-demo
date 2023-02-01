"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_components_qPickerview_usePickerview = require("../q-pickerview/usePickerview.js");
const usePickerProps = {
  ...uni_modules_kvQui_components_qPickerview_usePickerview.usePkViewProps,
  show: Boolean,
  position: String,
  title: String
};
const usePicker = ({ emit }) => {
  const innerValue = common_vendor.ref(null);
  function open(evt) {
    emit("update:show", true);
    emit("open", evt);
  }
  function close(evt) {
    emit("update:show", false);
    emit("close", evt);
  }
  function confirm(evt) {
    console.log(innerValue);
    emit("update:modelValue", innerValue.value);
    emit("confirm", innerValue);
    close(evt);
  }
  function onChange(evt) {
    innerValue.value = evt.detail.value;
    emit("change", evt);
  }
  return {
    innerValue,
    open,
    close,
    confirm,
    onChange
  };
};
exports.usePicker = usePicker;
exports.usePickerProps = usePickerProps;
