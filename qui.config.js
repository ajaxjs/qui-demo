import LocalStorage from '@/uni_modules/kv-qui/plugins/LocalStorage.js'
export default {
	// UI 
	config: {
		// 自定义头部高度
		headHeight: 44,
		// 自定义底部高度
		footHeight: 50,
		notify: {
			position: 'top',
			timeout: 2500
		},
		// 系统主题，不设置则获取
		// dark: false,
		// web-view 路径
		webViewPath: '/pages/index/broswer'
	},
	iconSet: {
		icon:'material-icons',
		field: {
			error: 'error',
			clear: 'cancel',
		}
	}, // Quasar icon set
	lang: 'zh-CN',
	// Quasar plugins
	plugins: [
		LocalStorage,
	],
}