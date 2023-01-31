"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_private_create = require("../../utils/private/create.js");
const uni_modules_kvQui_composables_private_useAttr = require("../../composables/private/use-attr.js");
require("../../utils/event.js");
const uni_modules_kvQui_utils_private_symbols = require("../../utils/private/symbols.js");
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
const _sfc_main = uni_modules_kvQui_utils_private_create.createComponent({
  name: "QTabs",
  props: {
    ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String
  },
  setup(props, { slots, emit }) {
    const currentModel = common_vendor.ref(props.modelValue);
    const scrollable = common_vendor.ref(true);
    common_vendor.ref(true);
    common_vendor.ref(false);
    common_vendor.ref(false);
    const arrowsEnabled = common_vendor.computed$1(
      () => props.mobileArrows === true
    );
    const tabDataList = [];
    const tabDataListLen = common_vendor.ref(0);
    const hasFocus = common_vendor.ref(false);
    const alignClass = common_vendor.computed$1(() => {
      return `q-tabs__content--align-${props.align || "justify"}`;
    });
    const classes = common_vendor.computed$1(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${arrowsEnabled.value === true && props.outsideArrows === true ? "outside" : "inside"}` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = common_vendor.computed$1(
      () => "q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "") + " scroll"
    );
    common_vendor.watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    const tabProps = common_vendor.computed$1(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = common_vendor.computed$1(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    function updateModel({ name, setCurrent, skipEmit, fromRoute }) {
      if (currentModel.value !== name) {
        if (skipEmit !== true) {
          emit("update:modelValue", name);
        }
        if (setCurrent === true) {
          currentModel.value = name;
        }
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      updateModel
    };
    common_vendor.provide(uni_modules_kvQui_utils_private_symbols.tabsKey, $tabs);
    common_vendor.onMounted((e) => {
    });
    return {
      classes,
      innerClass
    };
  },
  mounted() {
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(_ctx.innerClass),
    b: common_vendor.n(_ctx.classes),
    c: common_vendor.n(_ctx.className)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-tabs/q-tabs.vue"]]);
wx.createComponent(Component);
