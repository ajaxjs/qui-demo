import conf from '@/qui.config.js';
import deepmerge from './utils/deep-merge.js';

const config = deepmerge({
	// 系统主题，不设置则获取
	// dark: false,
	// 自定义头部高度
	headHeight: 44,
	// 自定义底部高度
	footHeight: 50,
	lang: 'zh-CN',
	notify: {
		position: 'top',
		timeout: 2500
	},
	iconSet: {
		icon:'material-icons',
		field: {
			error: 'error',
			clear: 'cancel',
			left: 'chevron_left',
			right: 'chevron_right',
		}
	}, // Quasar icon set
	// 第三方插件
	external: {}
}, conf)

export default config