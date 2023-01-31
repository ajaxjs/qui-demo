import clone from '../../utils/clone.js'
import Nongli from './Nongli.js'

const padStart = (string, length, pad) => {
	const s = String(string)
	if (!s || s.length >= length) return string
	return `${Array((length + 1) - s.length).join(pad)}${string}`
}

const padZoneStr = (instance) => {
	const negMinutes = -instance.utcOffset()
	const minutes = Math.abs(negMinutes)
	const hourOffset = Math.floor(minutes / 60)
	const minuteOffset = minutes % 60
	return `${negMinutes <= 0 ? '+' : '-'}${padStart(hourOffset, 2, '0')}:${padStart(minuteOffset, 2, '0')}`
}

const isQDate = d => d instanceof QDate

const qdate = function(date,format) {
	if (isQDate(date)) {
		return date.clone()
	}
	return new QDate(date,format)
}

const parseDate = function(cfg) {
	const tags = typeof(cfg)
	let lifa = '公', date = cfg, leap = false;
	if (cfg && tags == 'string') {
		const ds = cfg.match(/^([公农历]+\s+)?(.+?)(\(.+\))?$/)
		if (ds) {
			lifa = ds[1] ? ds[1].substring(0, 1) : '公'
			date = ds[2].trim().replace('-','/')
			leap = ds[3] ? true : false
		}
	}else if(tags=='object' && cfg.date){
		if(['公','农'].includes(cfg.lifa)) lifa = cfg.lifa
		if(typeof(cfg.leap)=='boolean') leap = cfg.leap
		date = cfg.date
	}
	if(Array.isArray(date)){
		const ndate = clone(date)
		if(ndate[1]<0){
			leap=true
			ndate[1] = Math.abs(ndate[1])
		}
		ndate[1] -= 1
		date = new Date(...ndate)
	}
	return {
		lifa,
		date: new Date(Date.parse(date)),
		leap,
	}
}

class QDate {
	constructor(cfg, format) {
		this.$format = format || 'YYYY-MM-DDTHH:mm:ssZ'
		this.parse(cfg)
		this.init()
	}
	init() {
		const {$d} = this
		this.$y = $d.getFullYear()
		this.$M = $d.getMonth()
		this.$D = $d.getDate()
		this.$W = $d.getDay()
		this.$H = $d.getHours()
		this.$m = $d.getMinutes()
		this.$s = $d.getSeconds()
		this.$ms = $d.getMilliseconds()
	}
	parse(cfg) {
		const { lifa, date, leap } = parseDate(cfg)
		this.$d = date
		this.$lifa = lifa
		this.$leap = leap
	}
	clone() {
		return clone(this)
	}
	format(formatStr) {
		const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
		const str = formatStr || this.$format
		const zoneStr = padZoneStr(this)
		const { $H, $m, $M } = this
		
		const get$H = num => (
			padStart($H % 12 || 12, num, '0')
		)

		const meridiemFunc = ((hour, minute, isLowercase) => {
			const m = (hour < 12 ? 'AM' : 'PM')
			return isLowercase ? m.toLowerCase() : m
		})
		const matches = {
			YY: String(this.$y).slice(-2),
			YYYY: this.$y,
			M: $M + 1,
			MM: padStart($M + 1, 2, '0'),
			D: this.$D,
			DD: padStart(this.$D, 2, '0'),
			d: String(this.$W),
			H: String($H),
			HH: padStart($H, 2, '0'),
			h: get$H(1),
			hh: get$H(2),
			a: meridiemFunc($H, $m, true),
			A: meridiemFunc($H, $m, false),
			m: String($m),
			mm: padStart($m, 2, '0'),
			s: String(this.$s),
			ss: padStart(this.$s, 2, '0'),
			SSS: padStart(this.$ms, 3, '0'),
			Z: zoneStr // 'ZZ' logic below
		}

		return str.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match] || zoneStr.replace(':', '')) // 'ZZ'
	}

	utcOffset() {
		// Because a bug at FF24, we're rounding the timezone offset around 15 minutes
		// https://github.com/moment/moment/pull/1871
		return -Math.round(this.$d.getTimezoneOffset() / 15) * 15
	}
	// 获取当前月份天数
	monthDays() {
		//let days = new Date(this.$y, this.$M + 1, 0).getDate()
		let days = Nongli.solarDays(this.$y, this.$M + 1)
		if (this.$lifa == '农') {
			days = this.$leap ? Nongli.leapDays(this.$y) : Nongli.monthDays(this.$y, this.$M + 1)
		}
		return days
	}
	toString(){
		return [this.$lifa+'历', this.format(), this.$leap?'(闰'+(this.$M+1)+'月)':''].filter(vo=>vo).join(' ')
	}
	
}

export default qdate
