"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useDark = require("../../composables/private/use-dark.js");
const uni_modules_kvQui_composables_private_useLink = require("../../composables/private/use-link.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const uni_modules_kvQui_utils_event = require("../../utils/event.js");
const uni_modules_kvQui_utils_private_keyComposition = require("../../utils/private/key-composition.js");
require("../../utils/uniapp/page.js");
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QItem",
  props: {
    ...uni_modules_kvQui_composables_private_useDark.useDarkProps,
    ...uni_modules_kvQui_composables_private_useLink.useLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    ripple: Boolean,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props, {
    slots,
    emit
  }) {
    const { proxy: { $q } } = common_vendor.getCurrentInstance();
    const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, $q);
    const {
      hasLink,
      linkClass,
      linkActive,
      linkAttrs
    } = uni_modules_kvQui_composables_private_useLink.useLink(props);
    const rootRef = common_vendor.ref(null);
    const blurTargetRef = common_vendor.ref(null);
    const isActionable = common_vendor.computed$1(
      () => props.clickable === true || hasLink.value === true
    );
    const isClickable = common_vendor.computed$1(
      () => props.disable !== true && isActionable.value === true
    );
    const classes = common_vendor.computed$1(
      () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style = common_vendor.computed$1(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    return {
      rootRef,
      blurTargetRef,
      classes,
      style,
      isKeyCode: uni_modules_kvQui_utils_private_keyComposition.isKeyCode,
      hasLink,
      linkClass,
      linkActive,
      linkAttrs
    };
  },
  methods: {
    onKeyup(e) {
      const { isClickable, isKeyCode } = this;
      if (isClickable && isKeyCode(e, 13) === true) {
        uni_modules_kvQui_utils_event.stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        this.onClick(evt);
      }
      this.$emit("keyup", e);
    },
    onClick(evt) {
      const { isClickable, hasLink, linkAttrs } = this;
      if (isClickable) {
        if (this.$refs.rippleRef) {
          this.$refs.rippleRef.ripple(evt);
        }
        if (hasLink) {
          this.$uni.openUrl(linkAttrs);
        }
        this.$emit("click", evt);
      }
    }
  }
});
if (!Array) {
  const _easycom_q_ripple2 = common_vendor.resolveComponent("q-ripple");
  _easycom_q_ripple2();
}
const _easycom_q_ripple = () => "../q-ripple/q-ripple.js";
if (!Math) {
  _easycom_q_ripple();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.blurTargetRef,
    b: -1,
    c: !_ctx.disable && _ctx.ripple
  }, !_ctx.disable && _ctx.ripple ? {
    d: common_vendor.sr("rippleRef", "79660b72-0")
  } : {}, {
    e: common_vendor.n(_ctx.classes),
    f: common_vendor.o((...args) => _ctx.onClick && _ctx.onClick(...args)),
    g: common_vendor.o((...args) => _ctx.onKeyup && _ctx.onKeyup(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-item/q-item.vue"]]);
wx.createComponent(Component);
