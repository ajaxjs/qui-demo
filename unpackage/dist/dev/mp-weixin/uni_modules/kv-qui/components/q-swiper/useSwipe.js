"use strict";
const useSwipeProps = {
  indicatorDots: Boolean,
  indicatorColor: { type: String, default: "rgba(0, 0, 0, .3)" },
  indicatorActiveColor: { type: String, default: "#000000" },
  activeClass: String,
  changingClass: String,
  autoplay: Boolean,
  interval: { type: Number, default: 5e3 },
  duration: { type: Number, default: 500 },
  circular: Boolean,
  vertical: Boolean,
  previousMargin: { type: String, default: "0px" },
  nextMargin: { type: String, default: "0px" },
  acceleration: Boolean,
  disableProgrammaticAnimation: Boolean,
  displayMultipleItems: { type: Number, default: 1 },
  skipHiddenItemLayout: Boolean,
  disableTouch: Boolean,
  touchable: { type: Boolean, default: true },
  easingFunction: { type: String, default: "default" }
};
exports.useSwipeProps = useSwipeProps;
