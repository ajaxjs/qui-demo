// URL解析
const field = {
	'Username': 4,
	'Password': 5,
	'Port': 7,
	'ProtocolHead': 1,
	'Protocol': 2,
	'Host': 6,
	'Pathname': 8,
	'URL': 0,
	'Querystring': 9,
	'Hash': 10
}
// 匹配
const regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?(\/?[^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;

// 字符串转对象
export const queryParse = function(qs) {
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
	/*
	var args = qs && typeof(qs)=='string' ? qs.split("&") : [];
	var vals = new Object();
	for (var i = 0; i < args.length; i++) {
		var nameVal = args[i].split("=");
		var temp = unescape(nameVal[1]).split('+');
		nameVal[1] = temp.join(' ');
		vals[nameVal[0]] = nameVal[1];
	}
	return vals;*/
};

// 对象转字符串
export const queryString = function(obj) {
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
const changeSonType = function(objName, objValue) {
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

// 解析URL
export const parseUrl = function(href, prms) {
	let url = {}
	let urlArr = regex.exec(href);
	for (let i in field) {
		let ki = field[i]
		let vo = urlArr[ki]
		url[i] = vo !== undefined ? vo : ''
	}
	if (prms && typeof(prms) == 'string') {
		prms = queryParse(prms)
	}
	url['Params'] = Object.assign({}, queryParse(url['Querystring']), prms)
	url.Querystring = queryString(url['Params'])

	// 设置参数
	url.setParam = function(name, val) {
		let param = {}
		if (typeof(name) == 'object') {
			param = name
		} else if (name && val !== undefined) {
			param[name] = val
		}
		Object.assign(url.Params, param)
		url.Querystring = queryString(url['Params'])
		return url
	}
	// 转为URL字符串
	url.toString = function(urlObj) {
		urlObj = urlObj || url
		const urlStr = urlObj.ProtocolHead +
			urlObj.Username +
			(urlObj.Username ? ':' : '') +
			urlObj.Password +
			(urlObj.Username ? '@' : '') +
			urlObj.Host +
			(urlObj.Port ? ':' : '') +
			urlObj.Port +
			urlObj.Pathname +
			(urlObj.Pathname ? '?' : '') +
			urlObj.Querystring +
			(urlObj.Hash ? '#' : '') +
			urlObj.Hash
		return urlStr
	}
	return url
}

export default parseUrl
