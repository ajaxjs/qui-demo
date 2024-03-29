import {
	ref,
	computed,
	defineEmits,
	watch
} from 'vue';
import qcalendar, {
	dayjs
} from '../../plugins/Calendar.js';

export const calendarProps = {
	// 字符串日期
	modelValue: String,
	// 默认年、月，如：2024-5，或[2024,5]
	defaultYearMonth: [Array,String],
	// 显示农历
	showLunar: Boolean,
	// 附加信息
	dateInfo: Array,
	// 今日样式
	todayClass: String,
	// 返回今日按扭
	todayBtn: Boolean,
	// 选中样式
	activeClass: String,
	// 日期格式
	format: {
		type: String,
		default: 'YYYY-MM-DD'
	}
}

export default function(props, {
	emit
}) {
	// 是否dayjs对象
	function isDayjs(day){
		return day instanceof dayjs;
	}
	// 转dayjs对象
	function toDayjs(day){
		return isDayjs(day) ? day : dayjs(day);
	}
	// 日期转字符串
	function toStrDate(day){
		return toDayjs(day).format(props.format)
	}
	// 解析年-月，dym=year-month
	function parseYm(dym) {
		dym = Array.isArray(dym) ? dym.filter(vo=>!!vo).join('-') : dym;
		dym = dym ? dym : toStrDate(props.modelValue||new Date());
		dym = dym.split(/[\,\-\/]/).map(vo => parseInt(vo.trim())).splice(0, 2);
		return dym;
	}

	return {
		isDayjs,
		toDayjs,
		toStrDate,
		parseYm,
	}
}