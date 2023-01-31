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
const queryParse = function(qs) {
	var args = qs && typeof(qs)=='string' ? qs.split("&") : [];
	var vals = new Object();
	for (var i = 0; i < args.length; i++) {
		var nameVal = args[i].split("=");
		var temp = unescape(nameVal[1]).split('+');
		nameVal[1] = temp.join(' ');
		vals[nameVal[0]] = nameVal[1];
	}
	return vals;
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
	if(prms && typeof(prms)=='string'){
		prms = queryParse(prms)
	}
	url['Params'] = Object.assign({}, queryParse(url['Querystring']), prms)
	url.Querystring = queryString(url['Params'])
	
	// 设置参数
	url.setParam = function(name, val){
		let param = {}
		if(typeof(name) == 'object'){
			param = name
		}else if(name && val !== undefined){
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
			(urlObj.Hash?'#':'')+
			urlObj.Hash
		return urlStr
	}
	return url
}

// 获取转换navigate跳转类型
export function getOpenType(target){
	const targInf = {
		'_blank'	: 'navigate',
		'_self'		: 'redirect',
		'_tab'		: 'switchTab',
		'_top'		: 'reLaunch',
		'_exit'		: 'exit',
	}
	return target? (targInf[target] || target) : 'navigate'
}

// 连接参数格式化
export function formatParam(evt, defaultOpts){
	const prms = (evt && evt.currentTarget ? evt.currentTarget.dataset : (evt && typeof(evt)=='string' ? {to: evt} : evt)) || {}
	if(prms.query){
		// 混入参数
		['to','mp','href'].forEach(key=>{
			if(prms[key]){
				prms[key] = parseUrl(prms[key])
				prms[key].addParam(prms.query)
				prms[key] = prms[key].toString()
			}
		})
	}
	return Object.assign({}, defaultOpts, prms)
}

// 打开小程序URL格式：appId://pages/index/index?id=123
export function openMp(evt){
	
	let {mp,envVersion} = formatParam(evt)
	mp = parseUrl(mp)
	
	const {Params,Protocol} = mp;
	mp.ProtocolHead = '/'
	return new Promise((success, fail)=>{
		uni.navigateToMiniProgram({
			appId: Protocol,
			path: mp.toString(),
			extraData: Params,
			envVersion,
			success,
			fail
		})
	})
}

export function openUrl(evt) {
	let {href, to, mp, target, animate, duration, root} = formatParam(evt)
	target = getOpenType(target)
	let url = ''
	if(mp){
		// 打开小程序
		return openMp(evt)
	}else if(to){
		// 内部网址
		url = to
	}else if(href){
		// 远程网址，加入web-view路径
		url = root+'?url='+href
	}else{
		return null;
	}
	
	return new Promise((success, fail) => {
		switch (target){
			case 'redirect':
				uni.redirectTo({url, success, fail})
				break;
			case 'switchTab':
				uni.switchTab({url, success, fail})
				break;
			case 'reLaunch':
				uni.reLaunch({url, success, fail})
				break;
			default:
				uni.navigateTo({
					url,
					animationType: animate,
					animationDuration: duration,
					success,
					fail
				})
				break;
		}
	})
}
