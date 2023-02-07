// 字符串配平
export function pad(v, length = 2, char = '0') {
	if (v === void 0 || v === null) {
		return v
	}
	const val = '' + v
	return val.length >= length ? val : new Array(length - val.length + 1).join(char) + val
}

// CSS样式转对象
export function destyle(styl) {
	const stylObj = {}
	if (styl && typeof styl == 'string') {
		styl = styl.split(';').map(vo => {
			vo = vo.split(':').map(item => item.trim())
			if (vo[1] !== undefined) stylObj[vo[0]] = vo[1]
			return vo
		})
	} else if (typeof styl == 'object') {
		Object.keys(styl).map(key => {
			if (styl[key] === undefined) delete styl[key]
		})
	}
	return stylObj;
}

export function between(v, min, max) {
	return max <= min ? min : Math.min(max, Math.max(min, v))
}

export function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export function normalizeToInterval(v, min, max) {
	if (max <= min) {
		return min
	}

	const size = (max - min + 1)

	let index = min + (v - min) % size
	if (index < min) {
		index = size + index
	}

	return index === 0 ? 0 : index // fix for (-a % a) => -0
}

export default {
	pad,
	destyle,
	between,
	capitalize,
	normalizeToInterval,
}
