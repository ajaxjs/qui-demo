"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_kvQui_components_qDatetime_dateUtils = require("./dateUtils.js");
const uni_modules_kvQui_components_qDatetime_Nongli = require("./Nongli.js");
const uni_modules_kvQui_utils_format = require("../../utils/format.js");
const yearVali = (y) => y >= 1900 && y <= 2100;
const useDateTimeProps = {
  modelValue: String,
  lifa: {
    type: String,
    default: "\u516C",
    validate: (vo) => ["\u516C", "\u519C"].includes(vo)
  },
  defaults: String,
  dateType: {
    type: String,
    default: "datetime",
    validate: (vo) => ["datetime", "date"].includes(vo)
  },
  format: String,
  min: {
    type: Number,
    default: () => 1930,
    validate: yearVali
  },
  max: {
    type: Number,
    default: () => 2100,
    validate: yearVali
  }
};
const mapMax = function(min, max) {
  const retn = [];
  for (let i = min; i <= max; i++) {
    retn.push(i);
  }
  return retn;
};
const useDateTime = ({ props, emit }) => {
  const min = uni_modules_kvQui_components_qDatetime_dateUtils.qdate(props.min);
  const max = uni_modules_kvQui_components_qDatetime_dateUtils.qdate(props.max);
  const dft = uni_modules_kvQui_components_qDatetime_dateUtils.qdate(props.modelValue ? props.lifa + " " + props.modelValue : props.defaults || new Date());
  const dateArr = dft.format("YYYY-M-D" + (props.dateType == "datetime" ? "-H-m" : "")).split("-").map((vo) => Number(vo));
  if (dft.$leap)
    dateArr[1] = -dateArr[1];
  console.log(dft);
  const lifa = common_vendor.ref(dft.$lifa);
  const innerValue = common_vendor.ref(dateArr);
  const dateRes = common_vendor.ref(null);
  const dateVal = common_vendor.ref(null);
  const format = common_vendor.ref(props.format || "YYYY-MM-DD" + (props.dateType == "datetime" ? " HH:mm" : ""));
  const options = common_vendor.computed$1(() => {
    const [year, month] = innerValue.value;
    const maxDay = lifa.value == "\u516C" ? uni_modules_kvQui_components_qDatetime_Nongli.calendar.solarDays(year, month) : month < 0 ? uni_modules_kvQui_components_qDatetime_Nongli.calendar.leapDays(year) : uni_modules_kvQui_components_qDatetime_Nongli.calendar.monthDays(year, month);
    let dateCol = [];
    dateCol[0] = mapMax(min.$y, max.$y).map((value) => ({ label: value + "\u5E74", value }));
    if (lifa.value == "\u516C") {
      dateCol[1] = mapMax(1, 12).map((value) => ({ label: uni_modules_kvQui_utils_format.pad(value, 2) + "\u6708", value }));
      dateCol[2] = mapMax(1, maxDay).map((value) => ({ label: uni_modules_kvQui_utils_format.pad(value, 2) + "\u65E5", value }));
    } else {
      dateCol[1] = mapMax(1, 12).map((value) => ({ label: uni_modules_kvQui_components_qDatetime_Nongli.calendar.toChinaMonth(value), value }));
      const leapMonth = uni_modules_kvQui_components_qDatetime_Nongli.calendar.leapMonth(year);
      if (leapMonth) {
        dateCol[1].splice(leapMonth, 0, { label: "\u95F0" + uni_modules_kvQui_components_qDatetime_Nongli.calendar.toChinaMonth(leapMonth), value: -leapMonth, leap: true });
      }
      dateCol[2] = mapMax(1, maxDay).map((value) => ({ label: uni_modules_kvQui_components_qDatetime_Nongli.calendar.toChinaDay(value), value }));
    }
    if (props.dateType == "datetime") {
      dateCol.push(mapMax(0, 23).map((value) => ({ label: uni_modules_kvQui_utils_format.pad(value, 2) + "\u65F6", value })));
      dateCol.push(mapMax(0, 59).map((value) => ({ label: uni_modules_kvQui_utils_format.pad(value, 2) + "\u5206", value })));
    }
    return dateCol;
  });
  function onChange(val) {
    if (val.index[2] > options.value[2].length - 1) {
      const maxId = options.value[2].length - 1;
      val.index[2] = maxId;
      val.rawValue[2] = options.value[2][maxId];
      val.value[2] = options.value[2][maxId]["value"];
    }
    dateRes.value = val;
    innerValue.value = val.value;
    const date = val.value;
    const leap = date[1] < 0 ? true : false;
    const dateObj = uni_modules_kvQui_components_qDatetime_dateUtils.qdate({
      lifa: lifa.value,
      date,
      leap
    }, format.value);
    dateVal.value = {
      qobj: dateObj,
      lifa: lifa.value,
      date: dateObj.format(),
      leap,
      text: dateObj.toString()
    };
    emit("change", dateVal);
  }
  function onLifaChange(lf) {
    lifa.value = lf;
    onChange(dateRes.value);
  }
  function onDateReady(val) {
    onChange(val);
  }
  function onDateChange(evt) {
    onChange(evt.detail);
  }
  return {
    colName: ["\u5E74", "\u6708", "\u65E5", "\u65F6", "\u5206", "\u79D2"],
    options,
    lifa,
    innerValue,
    dateVal,
    onDateReady,
    onLifaChange,
    onDateChange
  };
};
exports.useDateTime = useDateTime;
exports.useDateTimeProps = useDateTimeProps;
