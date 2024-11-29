// URL解析
const field = {
	'username': 4,
	'password': 5,
	'port': 7,
	'protocolHead': 1,
	'protocol': 2,
	'host': 6,
	'pathname': 8,
	'query': 9,
	'hash': 10
}
// 匹配
const regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?(\/?[^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;

// Query字符串转对象
export function queryParse(qs) {
	let items = qs && typeof(qs) == 'string' ? qs.split("&") : [];
	let result = {}
	let arr = [];
	for (let i = 0; i < items.length; i++) {
		arr = items[i].split('=');
		if (result[arr[0]]) {
			if (Array.isArray(result[arr[0]])) {
				result[arr[0]].push(arr[1])
			} else {
				result[arr[0]] = [result[arr[0]], arr[1]]
			}
		} else {
			result[arr[0]] = arr[1];
		};
	};
	return result;
};

// Query对象转字符串
export function queryString(obj) {
	let str = ''
	if (typeof obj == 'object') {
		for (let i in obj) {
			if (typeof obj[i] != 'function' && typeof obj[i] != 'object') {
				str += i + '=' + obj[i] + '&';
			} else if (typeof obj[i] == 'object') {
				nextStr = '';
				str += changeSonType(i, obj[i])
			}
		}
	}
	return str.replace(/&$/g, '');
}

function changeSonType(objName, objValue) {
	if (typeof objValue == 'object') {
		for (let i in objValue) {
			if (typeof objValue[i] != 'object') {
				let value = objName + '[' + i + ']=' + objValue[i];
				nextStr += encodeURI(value) + '&';
			} else {
				changeSonType(objName + '[' + i + ']', objValue[i]);
			}
		}
	}
	return nextStr;
}


class Url {
	constructor(url) {
		this.parse(url)
	}
	// 克隆新对象
	clone() {
		return clone(this)
	}
	// 解析URL
	parse(url) {
		let urlRex = regex.exec(url);
		this.URL = urlRex[0]
		for (let key in field) {
			const i = field[key];
			this[key] = urlRex[i];
		}
		if (this.query) {
			this.query = queryParse(this.query)
		}
	}
	// URL设置
	set(name, value) {
		if (field[name]) {
			this[name] = value
		} else if (name == 'query') {
			console.error('设置query请使用setQuery!');
		} else {
			console.error('参数不可用!');
		}
	}
	// 设置参数
	setQuery(name, value) {
		if (typeof name === 'object') {
			for (let i in name) {
				this.query[i] = name[i];
			}
		} else {
			this.query[name] = value
		}
	}
	
	// 删除参数
	delQuery(name) {
		let nameArr = Array.isArray(name) ? name : [name];
		nameArr.forEach(key => delete this.query[key])
	}

	// 字符串
	toString() {
		return (this.protocolHead ? this.protocolHead + ':' : '') +
			(this.username ? this.username + ':' : '') +
			(this.password ? this.password + '@' : '') +
			(this.host ? this.host : '') +
			(this.port ? ':' + this.port : '') +
			(this.pathname ? this.pathname : '') +
			(this.query ? '?' + queryString(this.query) : '') +
			(this.hash ? '#'+this.hash : '')
	}
}

export default function(url) {
	return url instanceof Url ? Url.clone() : new Url(url)
}