"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_is = require("../../utils/is.js");
const _sfc_main = {
  props: {
    modelValue: Array,
    options: {
      type: Array,
      require: true
    },
    perfix: [String, Array],
    suffix: [String, Array],
    align: String,
    itemLabel: {
      type: String,
      default: "label"
    },
    itemValue: {
      type: String,
      default: "value"
    },
    itemHeight: {
      type: Number,
      default: 40
    },
    rowNumber: {
      type: Number,
      default: 5
    }
  },
  emits: ["update:modelValue", "change", "pickstart", "pickend", "ready"],
  setup(props, { emit }) {
    const initValue = props.options ? new Array(props.options.length).fill(0) : [];
    const indexValue = common_vendor.ref(initValue);
    const innerValue = common_vendor.ref(null);
    function getFix(fix, i) {
      return Array.isArray(fix) ? fix[i] || "" : fix;
    }
    function getItem(item, name) {
      name = { label: props.itemLabel, value: props.itemValue }[name];
      return typeof item == "object" ? item[name] : item;
    }
    function getValueIndex(val) {
      return props.options.map((col, ci) => {
        let index = 0;
        for (var i = 0; i < col.length; i++) {
          if (getItem(col[i], "value") == val[ci]) {
            return i;
          }
        }
        return index;
      });
    }
    if (props.modelValue) {
      indexValue.value = getValueIndex(props.modelValue);
    }
    common_vendor.watch(() => props.modelValue, (val) => {
      const valIndex = getValueIndex(props.modelValue);
      if (!uni_modules_kvQui_utils_is.isDeepEqual(indexValue.value, valIndex)) {
        indexValue.value = valIndex;
      }
    });
    const indicatorStyle = `height: ${props.itemHeight}px; line-height: ${props.itemHeight}px;` + (props.align ? `text-align: ${props.align}` : "");
    const styles = common_vendor.computed$1(() => `height:${props.itemHeight * props.rowNumber}`);
    function getValue(index) {
      index = index || indexValue.value;
      const rawValue = index.map((ind, ci) => {
        const col = props.options[ci];
        return ind >= col.length - 1 ? col[col.length - 1] : col[ind];
      });
      const value = rawValue.map((vo) => getItem(vo, "value"));
      return { index, rawValue, value };
    }
    function onChange(evt) {
      indexValue.value = evt.detail.value;
      const detail = getValue(indexValue.value);
      innerValue.value = detail.value;
      evt.detail = detail;
      emit("update:modelValue", innerValue.value);
      emit("change", evt);
    }
    function onPickstart(evt) {
      emit("pickstart", evt);
    }
    function onPickend(evt) {
      emit("pickend", evt);
    }
    common_vendor.onMounted(() => {
      emit("ready", getValue());
    });
    return {
      indexValue,
      innerValue,
      styles,
      indicatorStyle,
      getValue,
      getItem,
      getFix,
      onChange,
      onPickstart,
      onPickend
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.options, (item, i, i0) => {
      return {
        a: common_vendor.f(item, (vo, d, i1) => {
          return common_vendor.e($props.perfix ? {
            a: common_vendor.t($setup.getFix($props.perfix, i))
          } : {}, {
            b: common_vendor.t($setup.getItem(vo, "label"))
          }, $props.suffix ? {
            c: common_vendor.t($setup.getFix($props.suffix, i))
          } : {}, {
            d: common_vendor.n($setup.indexValue[i] == d ? "active" : ""),
            e: d
          });
        }),
        b: i
      };
    }),
    b: $props.perfix,
    c: $props.suffix,
    d: common_vendor.s($setup.indicatorStyle),
    e: $setup.indexValue,
    f: common_vendor.s($setup.styles),
    g: $setup.indicatorStyle,
    h: common_vendor.o((...args) => $setup.onChange && $setup.onChange(...args)),
    i: common_vendor.o((...args) => $setup.onPickstart && $setup.onPickstart(...args)),
    j: common_vendor.o((...args) => $setup.onPickend && $setup.onPickend(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/AppProject/qui-demo/uni_modules/kv-qui/components/q-pickerview/q-pickerview.vue"]]);
wx.createComponent(Component);
