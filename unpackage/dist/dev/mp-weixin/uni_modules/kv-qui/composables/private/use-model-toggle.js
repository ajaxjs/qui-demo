"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
};
const useModelToggleEmits = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function useModelToggle({ showing, duration, handleShow, handleHide }) {
  const vm = common_vendor.getCurrentInstance();
  const { props, emit, proxy } = vm;
  let payload;
  function toggle(evt) {
    if (showing.value === true) {
      hide(evt);
    } else {
      show(evt);
    }
  }
  function show(evt) {
    if (props.disable === true || evt !== void 0 && evt.qAnchorHandled === true)
      return;
    emit("update:modelValue", true);
    payload = evt;
    common_vendor.nextTick(() => {
      if (payload === evt)
        payload = void 0;
    });
    if (props.modelValue === null) {
      processShow(evt);
    }
  }
  function processShow(evt) {
    showing.value = true;
    emit("beforeShow", evt);
    if (handleShow !== void 0) {
      handleShow(evt);
    } else {
      emit("show", evt);
    }
  }
  function hide(evt) {
    if (props.disable === true)
      return;
    emit("update:modelValue", false);
    payload = evt;
    common_vendor.nextTick(() => {
      if (payload === evt)
        payload = void 0;
    });
    processHide(evt);
  }
  function processHide(evt) {
    emit("beforeHide", evt);
    if (handleHide !== void 0) {
      handleHide(evt);
    } else {
      emit("hide", evt);
    }
    setTimeout(() => {
      showing.value = false;
    }, duration);
  }
  function processModelChange(val) {
    if (props.disable === true && val === true) {
      if (props["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", false);
      }
    } else if (val === true !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
    val && common_vendor.index.$once("close-popup", (evt) => {
      hide(evt);
    });
  }
  common_vendor.watch(() => props.modelValue, processModelChange);
  return { show, hide, toggle };
}
exports.useModelToggle = useModelToggle;
exports.useModelToggleEmits = useModelToggleEmits;
exports.useModelToggleProps = useModelToggleProps;
