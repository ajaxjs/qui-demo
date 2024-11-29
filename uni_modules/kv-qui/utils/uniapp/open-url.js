import quiConf from '../../config.js'
import parseUrl from '../parse-url.js'
import pagesConf from '@/pages.json'

// 获取转换navigate跳转类型
export function getOpenType(target){
	const targInf = {
		'_blank'	: 'navigate',
		'_self'		: 'redirect',
		'_tab'		: 'switchTab',
		'_top'		: 'reLaunch',
		'_exit'		: 'exit',
	}
	return target ? (targInf[target] || target) : 'navigate'
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
	const {tabBar} = pagesConf;
	if(prms.to && tabBar){
		const intab = tabBar.list.filter(vo=>vo.pagePath==prms.to.replace(/^\//,'')).length;
		if(intab){
			prms.target = '_tab';
		}
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
		// 读取webView路径
		root = root || quiConf.webViewPath
		if(!root) return console.error('配置文件的 webViewPath 未设置！')
		// 远程网址，加入web-view路径
		url = '/'+root+'?url='+href
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
