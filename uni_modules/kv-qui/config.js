import conf from '@/qui.config.js';
import deepmerge from './utils/deep-merge.js';
import iconSet from './icon-set/material-icons.mjs'

const config = deepmerge({
	// 系统主题，不设置则获取
	// dark: false,
	// 自定义头部高度
	headHeight: 44,
	// 自定义底部高度
	footHeight: 50,
	config: {},
	lang: 'zh-CN',
	notify: {
		position: 'top',
		timeout: 2500
	},
	// WEB浏览器页
	webViewPath: 'uni_modules/kv-qui/pages/webview',
	// Quasar icon set
	iconSet,
	// 第三方插件
	external: {}
}, conf);

export default config