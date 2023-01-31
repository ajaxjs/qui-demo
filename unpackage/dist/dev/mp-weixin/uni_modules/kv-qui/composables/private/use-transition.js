"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useTransitionProps = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function useTransition(props, defaultShowFn = () => {
}, defaultHideFn = () => {
}) {
  return {
    transitionProps: common_vendor.computed$1(() => {
      const show = `q-animate--${props.transitionShow || defaultShowFn()}`;
      const hide = `q-animate--${props.transitionHide || defaultHideFn()}`;
      return { show, hide };
    }),
    transitionStyle: common_vendor.computed$1(() => ({
      "--animation-duration": props.transitionDuration + "ms",
      "animation-duration": props.transitionDuration + "ms",
      "animation-fill-mode": "forwards"
    }))
  };
}
exports.useTransition = useTransition;
exports.useTransitionProps = useTransitionProps;
