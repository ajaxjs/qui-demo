import clone from '../utils/clone.js'
import conf from '../config.js';
import lunar from '../utils/private/dayjs-lunar.js'
// 读取Dayjs
const {dayjs} = conf.external;
try{
	dayjs.extend(lunar);
}catch(e){
	console.error('请在qui.config.js中的external中引入dayjs');
}

export {dayjs};

class Calendar {
	constructor(date, opts) {
		const today = dayjs(date);
		this.firstDay = dayjs().date(1);
		this.lastDay = dayjs().date(today.daysInMonth());
		this.today = today;
		this.locale = today.$locale();
	}
	// 本月每一天
	days() {
		const maxday = this.today.daysInMonth();
		const offset = this.firstDay.day() - 1;
		const days = [];
		for (let i = 1; i <= 42; i++) {
			const day = this.today.date(i - offset);
			const d = day.date();
			// 索引
			day.index = i-1;
			// 是否当前天
			day.today = day.isSame(dayjs(), 'day');
			// 是否当前月
			if (i <= offset) {
				day.prev = true;
			} else if (i-offset > maxday) {
				day.next = true;
			} else {
				day.current = true;
			}
			days.push(day);
		}
		
		return days
	}
	// 每周
	weeks() {
		const days = this.days();
		const weeks = new Array(6).fill('').map((vo, i) => days.splice(0, 7))
		return weeks;
	}
}

export default function(date) {
	if (date instanceof Calendar) {
		return clone(date);
	}
	return new Calendar(date)
}