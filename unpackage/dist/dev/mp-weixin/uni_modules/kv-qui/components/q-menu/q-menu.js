"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_composables_private_useDark = require("../../composables/private/use-dark.js");
const uni_modules_kvQui_utils_private_positionEngine = require("../../utils/private/position-engine.js");
const _sfc_main = {
  name: "QMenu",
  components: {},
  inheritAttrs: false,
  props: {
    position: {
      type: [String, Array],
      default: ""
    },
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: uni_modules_kvQui_utils_private_positionEngine.validatePosition
    },
    self: {
      type: String,
      validator: uni_modules_kvQui_utils_private_positionEngine.validatePosition
    },
    offset: {
      type: Array,
      validator: uni_modules_kvQui_utils_private_positionEngine.validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    "click",
    "escapeKey"
  ],
  mounted() {
    common_vendor.index.$on("close-popup", (evt) => {
      this.hide();
      console.log("close-popup", evt);
    });
  },
  setup(props, { slots, emit, attrs }) {
    const vm = common_vendor.getCurrentInstance();
    const { proxy } = vm;
    const { $q } = proxy;
    const visible = common_vendor.ref(false);
    const isDark = uni_modules_kvQui_composables_private_useDark.useDark(props, $q);
    const menuClass = common_vendor.computed$1(
      () => {
        const cls = [];
        if (props.square === true)
          cls.push("q-menu--square");
        if (isDark.value === true)
          cls.push("q-menu--dark q-dark");
        let pos = props.position;
        pos = (Array.isArray(pos) ? pos : pos.split(/\s+?/)).map((item) => {
          return "q-menu__" + item.trim();
        });
        return cls.concat(pos);
      }
    );
    const style = common_vendor.reactive({});
    return {
      visible,
      menuClass,
      style
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    toggle(evt) {
      this.visible = !this.visible;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: ["fade"],
    b: $setup.visible,
    c: common_vendor.n($setup.menuClass),
    d: common_vendor.s($setup.style)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-menu/q-menu.vue"]]);
wx.createComponent(Component);
