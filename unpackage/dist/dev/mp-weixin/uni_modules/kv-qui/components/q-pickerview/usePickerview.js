"use strict";
const usePkViewProps = {
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
};
exports.usePkViewProps = usePkViewProps;
