export function getUniPlatform() {
	let platform = {}

	// #ifdef APP
	Object.assign(platform, {
		name:'app',
		is_app: true
	})
	// #endif
	//#ifdef APP-PLUS
		platform.type = 'APP-PLUS'
	//#endif
	//#ifdef APP-NVUE
		platform.type = 'APP-NVUE'
	//#endif
	//#ifdef APP-ANDROID
		platform.type = 'APP-ANDROID'
	//#endif
	//#ifdef APP-IOS
		platform.type = 'APP-IOS'
	//#endif
	//#ifdef APP-HARMONY
		platform.type = 'APP-HARMONY'
	//#endif

	// #ifdef WEB
		Object.assign(platform, {
			name:'web',
			is_web: true
		})
	// #endif
	
	// #ifdef MP
		Object.assign(platform, {
			name:'mp',
			is_mp: true
		})
	// #endif
	//#ifdef MP-WEIXIN
		platform.type = 'MP-WEIXIN'
	//#endif
	//#ifdef MP-ALIPAY
		platform.type = 'MP-ALIPAY'
	//#endif
	//#ifdef MP-BAIDU
		platform.type = 'MP-BAIDU'
	//#endif
	//#ifdef MP-TOUTIAO
		platform.type = 'MP-TOUTIAO'
	//#endif
	//#ifdef MP-LARK
		platform.type = 'MP-LARK'
	//#endif
	//#ifdef MP-QQ
		platform.type = 'MP-QQ'
	//#endif
	//#ifdef MP-KUAISHOU
		platform.type = 'MP-KUAISHOU'
	//#endif
	//#ifdef MP-JD
		platform.type = 'MP-JD'
	//#endif
	//#ifdef MP-360
		platform.type = 'MP-360'
	//#endif
	
	//#ifdef QUICKAPP-WEBVIEW
		platform = {
			name:'quickapp',
			is_quickapp: true,
			type: 'QUICKAPP-WEBVIEW'
		}
	//#endif
	//#ifdef QUICKAPP-WEBVIEW-UNION
		platform = {
			name:'quickapp',
			is_quickapp: true,
			type: 'QUICKAPP-WEBVIEW-UNION'
		}
	//#endif
	//#ifdef QUICKAPP-WEBVIEW-HUAWEI
		platform = {
			name:'quickapp',
			is_quickapp: true,
			type: 'QUICKAPP-WEBVIEW-HUAWEI'
		}
	//#endif
	
	return platform
}