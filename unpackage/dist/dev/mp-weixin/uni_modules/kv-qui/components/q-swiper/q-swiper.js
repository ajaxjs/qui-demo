"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_components_qSwiper_useSwipe = require("./useSwipe.js");
const uni_modules_kvQui_utils_is = require("../../utils/is.js");
const _sfc_main = {
  props: {
    ...uni_modules_kvQui_components_qSwiper_useSwipe.useSwipeProps,
    modelValue: [Number, String],
    options: Array
  },
  setup(props, { slots, emit }) {
    const { proxy: { $uni } } = common_vendor.getCurrentInstance();
    const items = props.options ? props.options.map((vo, i) => {
      vo.name = vo.name || "item-" + i;
      return vo;
    }) : Object.keys(slots).filter((v) => v.substring(0, 5) == "item-");
    const names = props.options ? items.map((vo) => vo.name) : items.map((vo) => vo.substr(5));
    const isRetNum = uni_modules_kvQui_utils_is.isNumber(props.modelValue);
    const current = common_vendor.ref(isRetNum ? props.modelValue : names.indexOf(props.modelValue) < 0 ? 0 : names.indexOf(props.modelValue));
    const onChange = (evt) => {
      current.value = evt.detail.current;
      const name = names[current.value];
      emit("update:modelValue", isRetNum ? current.value : names[current.value]);
      if (evt) {
        Object.assign(evt.detail, { name });
        emit("change", evt);
      }
    };
    const onClick = (evt, i) => {
      evt.detail.index = i;
      if (props.options) {
        const item = props.options[i];
        $uni.openUrl(item);
        evt.detail.item = item;
      }
      emitEvent("click", evt);
    };
    const emitEvent = (name, evt) => emit(name, evt);
    const titleFmt = (text, key) => {
      if (uni_modules_kvQui_utils_is.isObject(text)) {
        const classes = ["absolute-" + (text.position || "bottom"), text.class];
        text.class = classes;
      } else {
        text = { text, class: "absolute-bottom" };
      }
      return text[key];
    };
    return {
      current,
      items,
      titleFmt,
      onClick,
      onChange,
      emitEvent
    };
  }
};
if (!Array) {
  const _easycom_q_img2 = common_vendor.resolveComponent("q-img");
  _easycom_q_img2();
}
const _easycom_q_img = () => "../q-img/q-img.js";
if (!Math) {
  _easycom_q_img();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.items, (vo, i, i0) => {
      return common_vendor.e($props.options ? common_vendor.e({
        a: vo.title
      }, vo.title ? {
        b: common_vendor.t($setup.titleFmt(vo.title, "text")),
        c: common_vendor.n($setup.titleFmt(vo.title, "class"))
      } : {}, {
        d: "cb3390dc-0-" + i0,
        e: common_vendor.p({
          src: vo.src,
          className: "absolute-full",
          fit: true
        })
      }) : {
        f: common_vendor.d(vo)
      }, {
        g: i,
        h: common_vendor.o(($event) => $setup.onClick($event, i), i)
      });
    }),
    b: $props.options,
    c: _ctx.indicatorDots,
    d: _ctx.indicatorColor,
    e: _ctx.indicatorActiveColor,
    f: _ctx.activeClass,
    g: _ctx.changingClass,
    h: _ctx.autoplay,
    i: $setup.current,
    j: _ctx.interval,
    k: _ctx.duration,
    l: _ctx.circular,
    m: _ctx.vertical,
    n: _ctx.previousMargin,
    o: _ctx.nextMargin,
    p: _ctx.acceleration,
    q: _ctx.disableProgrammaticAnimation,
    r: _ctx.displayMultipleItems,
    s: _ctx.skipHiddenItemLayout,
    t: _ctx.disableTouch,
    v: _ctx.touchable,
    w: _ctx.easingFunction,
    x: common_vendor.o((...args) => $setup.onChange && $setup.onChange(...args)),
    y: common_vendor.o(($event) => $setup.emitEvent("transition", $event)),
    z: common_vendor.o(($event) => $setup.emitEvent("animationfinish", $event))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-swiper/q-swiper.vue"]]);
wx.createComponent(Component);
