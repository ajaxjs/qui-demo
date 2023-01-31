"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_utils_is = require("../../utils/is.js");
const uni_modules_kvQui_composables_private_useAttr = require("./use-attr.js");
const useOptionProps = {
  ...uni_modules_kvQui_composables_private_useAttr.useAttrProps,
  modelValue: { required: true },
  val: {},
  label: String,
  leftLabel: Boolean,
  labelClass: {},
  gutter: {
    type: String,
    default: "sm",
    validator: (val) => ["xs", "sm", "md", "lg"].includes(val)
  },
  color: String,
  checkedIcon: String,
  uncheckedIcon: String,
  options: Array
};
function useOption(props) {
  const trueValue = props.val !== void 0 ? props.val : true;
  const isGroup = common_vendor.computed$1(() => props.options !== void 0);
  const opts = common_vendor.computed$1(() => {
    const { label, disable, color, checkedIcon, uncheckedIcon, icon } = props;
    return isGroup.value ? props.options.map((vo) => {
      vo = typeof vo == "object" ? vo : { label: vo, value: vo };
      vo = Object.assign(
        {
          disable,
          color,
          checkedIcon: checkedIcon || vo.icon || icon,
          uncheckedIcon: uncheckedIcon || vo.icon || icon
        },
        vo
      );
      return vo;
    }) : [{ label, disable, color, value: trueValue, checkedIcon, uncheckedIcon }];
  });
  const status = common_vendor.computed$1(() => opts.value.map((vo) => {
    const { modelValue } = props;
    const { value } = vo;
    return Array.isArray(modelValue) ? modelValue.includes(value) : value == modelValue;
  }));
  const icons = common_vendor.computed$1(() => opts.value.map((vo, i) => {
    const { checkedIcon, uncheckedIcon } = vo;
    const checked = status.value[i];
    return checked && checkedIcon ? checkedIcon : !checked && uncheckedIcon ? uncheckedIcon : "";
  }));
  const itemClass = common_vendor.computed$1(() => opts.value.map((vo, i) => [
    vo.class,
    status.value[i] ? "q-checked" : ""
  ]));
  const labelStyle = common_vendor.computed$1(() => ({
    marginRight: uni_modules_kvQui_utils_is.isNumber(props.gutter) ? props.gutter + "px" : props.gutter
  }));
  const classes = common_vendor.computed$1(() => [
    "q-gutter-" + props.gutter,
    props.className
  ]);
  return {
    classes,
    opts,
    icons,
    status,
    isGroup,
    trueValue,
    itemClass,
    labelStyle
  };
}
exports.useOption = useOption;
exports.useOptionProps = useOptionProps;
