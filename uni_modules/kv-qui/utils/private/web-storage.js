import { isDate, isRegexp } from '../is.js'


function encode(value) {
	if (isDate(value) === true) {
		return '__q_date|' + value.toUTCString()
	}
	if (isRegexp(value) === true) {
		return '__q_expr|' + value.source
	}
	if (typeof value === 'number') {
		return '__q_numb|' + value
	}
	if (typeof value === 'boolean') {
		return '__q_bool|' + (value ? '1' : '0')
	}
	if (typeof value === 'string') {
		return '__q_strn|' + value
	}
	if (typeof value === 'function') {
		return '__q_strn|' + value.toString()
	}
	if (value === Object(value)) {
		return '__q_objt|' + JSON.stringify(value)
	}

	// hmm, we don't know what to do with it,
	// so just return it as is
	return value
}

function decode(value) {
	const length = value.length
	if (length < 9) {
		// then it wasn't encoded by us
		return value
	}

	const type = value.substring(0, 8)
	const source = value.substring(9)

	switch (type) {
		case '__q_date':
			return new Date(source)

		case '__q_expr':
			return new RegExp(source)

		case '__q_numb':
			return Number(source)

		case '__q_bool':
			return Boolean(source === '1')

		case '__q_strn':
			return '' + source

		case '__q_objt':
			return JSON.parse(source)

		default:
			// hmm, we reached here, we don't know the type,
			// then it means it wasn't encoded by us, so just
			// return whatever value it is
			return value
	}
}

export function getStorage() {
	const webStorage = () => uni.getStorageInfoSync()
	const get = key => {
			const item = uni.getStorageSync(key)
			return item ? decode(item) : null
		}

	return {
		has: key => get(key) !== '',
		getLength: () => webStorage().keys.length,
		getItem: get,
		// 根据下标读取
		getIndex: index => (index < webStorage().keys.length ? get(webStorage().keys[index]) : null),
		// 根据下标读取KEY
		getKey: index => (index < webStorage().keys.length ? webStorage().keys[index] : null),
		getAll: () => {
			let key
			const result = {}, len = webStorage().keys.length

			for (let i = 0; i < len; i++) {
				key = webStorage().keys[i]
				result[key] = get(key)
			}

			return result
		},
		getAllKeys: () => webStorage().keys,
		set: (key, value) => {
			uni.setStorageSync(key, encode(value))
		},
		remove: key => {
			uni.removeStorageSync(key)
		},
		clear: () => {
			uni.clearStorageSync()
		},
		isEmpty: () => webStorage().keys.length === 0
	}
}
