"use strict";
const common_vendor = require("../../../../common/vendor.js");
const alignValues = ["top", "middle", "bottom"];
const _sfc_main = {
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (v) => alignValues.includes(v)
    }
  },
  computed: {
    classes() {
      const text = this.outline === true ? this.color || this.textColor : this.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${this.multiLine === true ? "multi" : "single"}-line` + (this.outline === true ? " q-badge--outline" : this.color !== void 0 ? ` bg-${this.color}` : "") + (text !== void 0 ? ` text-${text}` : "") + (this.floating === true ? " q-badge--floating" : "") + (this.rounded === true ? " q-badge--rounded" : "") + (this.transparent === true ? " q-badge--transparent" : "");
    },
    style() {
      return this.align !== void 0 ? { verticalAlign: this.align } : null;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.label),
    b: common_vendor.n($options.classes),
    c: common_vendor.s($options.style),
    d: $props.label
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-badge/q-badge.vue"]]);
wx.createComponent(Component);
